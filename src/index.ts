import * as express from 'express';
import { AppBootstrap } from './appBootstrap';

const app: express.Application = express();

const bootStrap: AppBootstrap = new AppBootstrap(app);
bootStrap.start();
