import Router from 'koa-router';
import { publicUserController, privateUserController } from './user.controller';

export const configurePublicRouter = () => {
  const publicRouter = Router();

  publicRouter.use(publicUserController());

  return publicRouter.routes();
};

export const configurePrivatRouter = () => {
  const privatRouter = Router();

  privatRouter.use(privateUserController());

  return privatRouter.routes();
};
