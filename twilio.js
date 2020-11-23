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
* If today === f.birthday
* create message
* body --> It is ${f.firstName} ${f.lastName}'s birthday. Send them a text! 
* from --> `+16479526362`
* to: `+${user.phoneNumber}`
* .then(message => console.log(message.sid));

*/