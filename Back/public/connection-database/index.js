const mongoose = require('mongoose');
const host = "localhost:27017";
const db_name = 'report';
const URL_DB = `mongodb://${host}/${db_name}`;

/**
 * Se realiza la conexión a mongoDB a través de ORM mongoose
 * Se le envia un objeto de configuración para evitar errores de obsolencia
 */
mongoose.connect(URL_DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

/**
 * Se muestra este mensaje cuando la conexión se ha establecido sin ningún problema
 */
mongoose.connection.on('connected', () => {
    console.log('Conexión mongoose abierta');
});

/**
 * Se muestra este mensaje cuando ha ocurrido un error, ademas muestra el tipo de error ocurrido
 */
mongoose.connection.on('error', err => {
    console.log('Error Mongoose ' + err + ' error');
});

/**
 * Se muestra este mensaje cuando la conexión con mongodb ha sido desconectada
 */
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose desconectado');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose desconectado por cierre de aplicación');
        process.exit(0);
    });
});
