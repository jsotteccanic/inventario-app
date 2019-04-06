const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, res) => {
    // resp.addHeader("Access-Control-Allow-Origin", "https://inventario-app-aa28e.firebaseapp.com/");
    res.header('Access-Control-Allow-Origin', 'https://inventario-app-aa28e.firebaseapp.com');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    switch (request.method) {
        case 'GET':
            res.send('Se esta usando get');
            break;
        case 'POST':
            res.send(invocar(request.body.function, request.body.datos));
            break;
        case 'OPTIONS':
            res.send(request.method);
            break;
        case 'PUT':
            res.send(request.params);
            break;
        case 'DELETE':
            res.send(request.method);
            break;
        default:
            res.send('No tiene definido el tipo de request');
    }
});
function invocar(func, data) {
    switch (func) {
        case 'registrarAlmacen':
            return registrarAlmacen(data);
        case 'registrarPersonas':
            return registrarPersonas(data);
        case 'registrarProductos':
            return registrarProductos(data);
        default:
            return 'No existe un metodo que ejecutar';
    }
}
function registrarAlmacen(obj) {
    return db.collection('almacen').add(obj).then(ref => {
        return 'Se registró correctamente' + ref.id;
    });
}
function registrarPersonas(obj) {
    let inv = db.collection('personas').add(obj).then(ref => {
        console.log('Se registró correctamente' + ref.id);
    });
    return "se registro correctamente ";
}
function registrarProductos(obj) {
    let inv = db.collection('productos').add(obj).then(ref => {
        console.log('Se registró correctamente' + ref.id);
    });
    return "se registro correctamente ";
}
