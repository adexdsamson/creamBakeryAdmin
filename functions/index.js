var accountSid = 'ACa2afb0ebd85e6c99409845fddaeedd54';
var authToken =  'ecb136a7693c0524c50bea709c5d121';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const socketIo = require('socket.io');
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
const gmailEmail = functions.config().gmail.id;
const gmailPassword = functions.config().gmail.secret;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
const { Receipt } = require('./receipt'); 
admin.initializeApp();


const APP_NAME = 'Cream Bakery';
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//exports.helloWorld = functions.https.onRequest((request, response) => {
  //response.send("Hello from Firebase!");
//});


exports.helloWorld = functions.https.onRequest(async (req, res) => {
  res.send("Hello from Firebase!");
});

exports.newUserCreated = functions.https.onRequest(async(req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  admin.auth().createUserWithEmailAndPassword(email, password)
  .then(function(res) {
    res.json({
      message: 'Success',
      code: 'ok'
    })
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.json({
      message: errorMessage,
      code: errorCode
    })
  })
})

exports.logOut = functions.https.onRequest(async(req, res) => {
  admin.auth().signOut()
  .then(function(res) {
    res.json({
      message: 'Success',
      code: 'ok'
    })
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.json({
      message: errorMessage,
      code: errorCode
    })
  })
})



exports.onPurchase = functions.analytics.event('in_app_purchase').onLog(event => {
  // Analytical function
});

exports.onCreateOrder = functions.https.onRequest(async(req, res) => {
  const Order = req.data.order;

  const writeResult = await admin.firestore().collection('order').add(Order);
  res.json({
    result: `Message with ID: ${writeResult.id} added.`
  });
})

exports.sendToAdmin = functions.firestore
  .document('order/{documentId}')
  .onCreate((change, context) => { 
    var io = socketIo(admin);
    const original = change.data().Order;
    console.log('Uppercasing', context.params.documentId, original);
    change.on('change', (change) => {
      //console.log('socket.io:',change.fullDocument) // You could parse out the needed info and send only that data.
      io.emit('changeData', change.fullDocument);
    });
  });


exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

exports.sendMail = functions.https.onRequest((req, res,) => {
  // [END onDeleteTrigger]
  const email = req.data.email;
  const template = req.data.phone;
  sendConfirmEmail(template, email) ;

  res.json({

  });
});

exports.sendWhatsapp = functions.https.onRequest((req, res) => {
  const phone = req.data.phone;
  const template = req.data.template;
  const id = req.data.id;
  WhatsAppMessage(id, template, phone);
  res.json({

  });
})
  
// Sends a comfirmation email to the given user.
async function sendConfirmEmail(template, email) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@creambakery.com>`,
    to: email,
  };

  // Comfirmation of Order email.
  mailOptions.subject = `You have Placed an Orde ${APP_NAME}!`;
  mailOptions.text = template;
  await mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
  return null;
}

// Sends a comfirmation whatsApp message user.
async function WhatsAppMessage(id, phone, date) {
  client.messages 
  .create({ 
    body: `Your order with id ${id} has been comfimed. Expect your delivery on ${date}`,
    from: 'whatsapp:+14155238886',       
    to: `whatsapp:+234${phone}` 
  })
}