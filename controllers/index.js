import Router from 'koa-router';
import userController from './user.controller';
import categoryController from './category.controller';
import questionController from './question.controller';

export const configurePublicRouter = () => {
  const publicRouter = Router();
  publicRouter.use(userController());
  publicRouter.use(categoryController());
  publicRouter.use(questionController());

  return publicRouter.routes();
};

export const configurePrivatRouter = () => {
  const privatRouter = Router();
  return privatRouter.routes();
};
