import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { environments } from './common/environment';
import mongoose from 'mongoose'
import routersProject from './routers'
class Server {
    app: Express;
    constructor () {
        this.app = express();
        this.config();
        this.routers();
        this.database();
    }
    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
    }
    private routers() {
        this.app.use('/api', routersProject);
    }
    private async database() {
        console.log('Starting Database')
        await mongoose.connect(environments.connectionDB)
        console.log('Database OK');
    }
}
export default Server;