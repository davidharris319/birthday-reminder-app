const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function processBirthdayMessage(user) {
  user.friends.forEach(function(friend) {
    if(!friend.notified && birthdayToday(friend.birthday)) {
      sendMsg(user, friend);
      friend.notified = true;
      user.save().then(user => {
      }).catch(err => (console.log(err)))
    };
  });
};

function sendMsg(user, friend) {
  client.messages
   .create({
    body: `It is ${friend.firstName} ${friend.lastName}'s birthday today! Remember to send them something nice!`,
    from: '+16479526362',
    to: `+1${user.personalInfo.phoneNumber}`
  })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));
}

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  var date = `${yyyy}-${mm}-${dd}`;
  return date;
}

function birthdayToday(birthday) {
  if (getTodaysDate().slice(5) === birthday.slice(5)) {
    return true;
  } else {
    return false;
  }
}

function checkNotifiedStatus(user) {
  user.friends.forEach(function(friend) {
    if (friend.notified && (friend.birthday.slice(5) < getTodaysDate().slice(5))) {
      friend.notified = false;
      user.save().then(user => {
      }).catch(err => console.log(err))
    } else if ((friend.birthday.slice(5) === "12-31") && (getTodaysDate().slice(5) === "01-01")) {
      friend.notified = false;
      user.save().then(user => {
      }).catch(err => console.log(err))
    }
  });
};

module.exports = {
  sendMsg,
  processBirthdayMessage,
  checkNotifiedStatus
}