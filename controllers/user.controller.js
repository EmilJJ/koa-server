import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import codes from 'http-status-codes';
import config from '../config/server';
import UserService from '../services/user.service';

const createUser = async (ctx) => {
  const { name, surname, password } = ctx.request.body;
  const createdUser = await UserService.create({ name, surname, password });
  ctx.response.status = codes.OK;
  ctx.response.body = createdUser;
};

const loginUser = async (ctx) => {
  const user = ctx.request.body;
  const token = jwt.sign(user, config.secretJWT);
  ctx.status = codes.OK;
  ctx.body = token;
};

export default () => {
  const route = '/user';
  const router = Router();
  router.post(route, createUser);
  router.post(`${route}/login`, loginUser);
  return router.routes();
};
