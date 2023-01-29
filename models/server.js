const express = require('express');
const cors = require('cors');
// const userRouter = require('../routes/user');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuatiosPath = '/api/usuarios';

        this.middlewares();

        this.routes();
    }
    middlewares() {
        this.app.use( cors() );
        // Parseo y lectura del body
        this.app.use( express.json() );
        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usuatiosPath, require('../routes/users'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;