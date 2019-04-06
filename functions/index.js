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

    switch (request.body.function) {
        case 'registrarPresentacion':
            res.send(registrarPresentacion(request.body.datos));
            break;
        case 'registrarTipoDoc':
            res.send(registrarTipoDoc(request.body.datos));
            break;
        case 'registrarPrincipioActivo':
            res.send(registrarPrincipioActivo(request.body.datos));
            break;
        case 'registrarClase':
            res.send(registrarClase(request.body.datos));
            break;
        case 'registrarAlmacen':
            res.send(registrarAlmacen(request.body.datos));
            break;
        case 'registrarProveedor':
            res.send(registrarProveedor(request.body.datos));
            break;
        case 'registrarLaboratorio':
            res.send(registrarLaboratorio(request.body.datos));
            break;
        default:
            res.send('No tiene definido el tipo de request : ' + request.body.function);
    }
});

function registrarPrincipioActivo(obj) {
    return db.collection('principioActivo').add(obj).then(ref => {
        return ('Se registró correctamente' + ref.id);
    });
}
function registrarTipoDoc(obj) {
    return db.collection('tipoDoc').add(obj).then(ref => {
        return ('Se registró correctamente' + ref.id);
    });
}
function registrarPresentacion(obj) {
    return db.collection('presentacion').add(obj).then(ref => {
        return ('Se registró correctamente' + ref.id);
    });
}

function registrarClase(obj) {
    return db.collection('clase').add(obj).then(ref => {
        return ('Se registró correctamente' + ref.id);
    });
}

function registrarAlmacen(obj) {
    return db.collection('almacen').add(obj).then(ref => {
        return ref.id;
    });
}
function registrarProveedor(obj) {
    return db.collection('proveedor').add(obj).then(ref => {
        return ref.id;
    });
}
function registrarLaboratorio(obj) {
    return db.collection('laboratorio').add(obj).then(ref => {
    }).id;
}
