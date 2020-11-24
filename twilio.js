// const accountSid = 'AC48e7b185e1b0a8c1d79e0b0ee742d641';
// const authToken = 'dafeb26ddb12e2a774f691c01dcf38c6';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: `It works!`,
//     from: `+16479526362`,
//     to: `+14162745609`
//   })
//   .then(message => console.log(message.sid));

//   console.log('completed');


/* 
* For each friend


user.friends.forEach(function(friend, index) { 
* If today === f.birthday


client.messages
  .create({
    body: `It is ${friend.firstName} ${friend.lastName}'s birthday today! Remember to send them something nice!`,
    from --> `+1{user.phoneNumber}`,
    to: `+1${friend.phoneNumber}`
  })
 .then(message => console.log(message.sid));
}

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = Strig(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`
}

*/