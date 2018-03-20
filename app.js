import Koa from 'koa';
// import send from 'koa-send';
import serve from 'koa-static';
import jwt from 'koa-jwt';
import BodyParser from 'koa-bodyparser';
import path from 'path';
import cors from 'koa2-cors';
import morgan from 'koa-morgan';
import config from './config/server';
import dbConnection from './db-connection';
import errorMidleware from './middlewares/error.middleware';
import { logger } from './services';
import { configurePublicRouter, configurePrivatRouter } from './controllers';

const app = new Koa();

app.use(cors({ origin: '*' }));
app.use(
  BodyParser({
    enableTypes: ['json', 'form'],
  }),
);
app.use(morgan('tiny'));
app.use(serve(path.resolve(__dirname, './static')));

app.use(errorMidleware());
app.use(configurePublicRouter());
app.use(configurePrivatRouter());

dbConnection.sync({ force: true }).then(async () => {
  await app.listen(config.port, () => {
    logger.logInfo(`Server listen on port: ${config.port}`);
  });
});
