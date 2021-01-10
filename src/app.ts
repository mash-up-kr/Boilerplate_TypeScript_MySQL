import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import {normalize} from 'path';

//use env_values
dotenv.config();

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(process.env.NODE_ENV === 'production' ? logger('combined') : logger('dev'));
app.use(cookieParser());

// Body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', normalize(process.env.PORT || '3000'));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hihi');
});

app.listen(app.get('port'), () => {
    console.log(`!!!App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode!!!`);
});
