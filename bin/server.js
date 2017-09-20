'use strict'

// importa as dependencia baixas via node package menager
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');


// normaliza port, com a função normalizePort
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error',onError);
server.on('listening', onListening);
console.log('API rodando na port: ' + port);



function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' 
    ? 'pipe' + addr
    : 'port' + addr.port;
    debug('Listening on ' + bind);
}

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;

}


function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use (Porta já em uso)');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }