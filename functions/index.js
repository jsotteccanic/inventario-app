const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, res) => {
    // resp.addHeader("Access-Control-Allow-Origin", "https://inventario-app-aa28e.firebaseapp.com/");
    res.header('Access-Control-Allow-Origin','https://inventario-app-aa28e.firebaseapp.com');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.send("Hello from Firebase!");
});
