import {Application, Request, Response } from 'express';

// tslint:disable-next-line:no-var-requires
const bodyParser = require('body-parser');



export class AppBootstrap {
    private _app: Application;
    private _port: number = Number(process.env.PORT) || 8080;

    constructor(app: any) {
        this._app = app;
    }

    start() {
        this._app.use(bodyParser.json());
        this._app.set('trust proxy', true); // determine the original request IP and protocol
        this._app.disable('x-powered-by');
        this.setupGlobalErrorHandler();
        this._app.listen(this._port, () => {
            console.log(`App listening on port ${this._port}`);
        });
    };

    private setupGlobalErrorHandler() {
        this._app.use((err, req, res: Response, next) => {
            res.status(500).send(err.httpStatusCode).end();
        });
    }
}
