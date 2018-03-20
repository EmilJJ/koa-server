import Router from 'koa-router';
import codes from 'http-status-codes';
import { userRegisterService, addCarService } from '../services';

const userRegister = async (ctx) => {
  const id = await userRegisterService(ctx.request.body);

  ctx.status = codes.CREATED;
  ctx.body = { data: { id } };
};

const userAddsCar = async (ctx) => {
  const createdCar = await addCarService(ctx.request.body);
  ctx.status = codes.CREATED;
  ctx.body = { data: { createdCar } };
};


const publicUserController = () => {
  const route = '/user';
  const router = Router();

  router.post(`${route}`, userRegister);

  return router.routes();
};

const privateUserController = () => {
  const route = '/user';
  const router = Router();

  router.post(`${route}/add/car`, userAddsCar);

  return router.routes();
};

export {
  publicUserController,
  privateUserController,
};
