import express, { Application } from "express";
import userRoutes from '../routes/usuario';
import clientRoutes from '../routes/home';
import adminRoutes from "../routes/admin";
import categoriesRoutes from '../routes/categories';
import cors from 'cors';
import { conectToDB } from '../db/connect';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        client: '/api/client',
        admin: '/api/admin',
    }

    // home: '/api/client/home',
    // categories: '/api/client/categories',
    // usuarios: '/api/usuarios'

    // home: '/api/client/home',

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Métodos iniciales
        // this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await conectToDB.authenticate();
            console.log('DB OnLine')
        } catch (error) {
            throw new Error( error as string );
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura de Body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( '/', express.static('public') );

    }

    routes() {
        this.app.use( this.apiPaths.client, clientRoutes );
        this.app.use( this.apiPaths.admin, adminRoutes );
    }

    // this.app.use( this.apiPaths.categories, categoriesRoutes);
    // this.app.use( this.apiPaths.usuarios, userRoutes)

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto!!! ' + this.port );
        })
    }

}


export default Server
