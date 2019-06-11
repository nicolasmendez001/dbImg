var utilsDB = require('./utils');
var ObjectID = require('mongodb').ObjectID;

var db = utilsDB.getDbConnection();
var problemCollection;
var userCollection;

db.createCollection('problems', function (err, collection) {
    if (err) {
        console.log('Error creating users collection');
    }
    problemCollection = collection;
    console.log('Collection problems created');
});

db.createCollection('users', function (err, collection) {
    if (err) {
        console.log('Error creating users collection');
    }
    userCollection = collection;
    console.log('Collection users created');
});

exports.createProblem = function (titulo, fecha, url_img, descripcion, longitud, latitud, id_usuario, nombre_usuario, callback) {
    problemCollection.insert({
        titulo: titulo,
        fecha: fecha,
        url_img: url_img,
        descripcion: descripcion,
        longitud: longitud,
        latitud: latitud,
        id_usuario: id_usuario, 
        nombre_usuario: nombre_usuario,
    }, { w: 1 }, callback);
}

exports.getProblems = function (callback) {
    problemCollection.find().toArray(callback);
}

exports.updateUserDescription = function (userId, desc, callback) {
    problemCollection.update({ _id: ObjectID(userId) }, { $set: { desc: desc } }, { w: 1 }, callback);
}

exports.deleteProblem = function (userId, callback) {
    problemCollection.remove({ _id: ObjectID(userId) }, { w: 1 }, callback);
}

// usuarios

exports.createUser = function (nombre, correo, contraseña, callback) {
    userCollection.insert({
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
    }, { w: 1 }, callback);
}

exports.validateUser = async function (email, password) {
    // validar
    return await userCollection.findOne({correo:email,contraseña:password});
}
