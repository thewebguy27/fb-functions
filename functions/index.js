const functions = require("firebase-functions");

// http request 1
exports.randomNumber=functions.https.onRequest((request, response)=>{
  const num1=Math.round(Math.random()*100);
  response.send(num1.toString());
});

// http request 2
exports.toUrl=functions.https.onRequest((request, response)=>{
  response.redirect('https://www.google.com');
  });

// http callable 1
exports.sayHello=functions.https.onCall((data, context)=> {
    const name= data.name;
//   return `hello from firebase`;
    return `hello, ${name}`;
});