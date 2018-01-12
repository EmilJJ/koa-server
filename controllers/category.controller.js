import Router from 'koa-router';
import httpStatus from 'http-status-codes';
import CategoryService from '../services/category.service';

const createCategory = async (ctx) => {
  const { title } = ctx.request.body;
  const createdCategory = await CategoryService.create({ title });
  ctx.status = httpStatus.CREATED;
  ctx.body = createdCategory;
};

const getAllCategories = async (ctx) => {
  const allCategories = await CategoryService.findAll();
  ctx.status = httpStatus.OK;
  ctx.body = allCategories;
};

export default () => {
  const route = '/category';
  const router = Router();

  router.post(route, createCategory);
  router.get(route, getAllCategories);

  return router.routes();
};
