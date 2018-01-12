import Router from 'koa-router';
import codes from 'http-status-codes';
import QuestionService from '../services/question.service';

const createQuestion = async (ctx) => {
  const { categoryId } = ctx.params;
  const { text, order } = ctx.request.body;
  const createdQuestion = await QuestionService.create({ text, categoryId, order });
  ctx.response.status = codes.CREATED;
  ctx.response.body = createdQuestion;
};

const getAllQuestions = async (ctx) => {
  const allQuestions = await QuestionService.getAll();
  ctx.response.status = codes.OK;
  ctx.response.body = allQuestions;
};

const updateQuestion = async (ctx) => {
  const { questionId } = ctx.params;
  const payload = ctx.request.body;
  const updatedQuestionId = await QuestionService.update(questionId, payload);
  ctx.response.status = codes.OK;
  ctx.response.body = updatedQuestionId;
};

const getAllQuestionsByCategoryId = async (ctx) => {
  const { categoryId } = ctx.params;
  const question = await QuestionService.getByCategoryId(categoryId);
  ctx.response.status = codes.OK;
  ctx.response.body = question;
};

const deleteQuestion = async (ctx) => {
  const { questionId } = ctx.params;
  const deletedQuestionId = await QuestionService.delete(questionId);
  ctx.response.status = codes.OK;
  ctx.response.body = { deletedQuestionId };
};

export default () => {
  const route = '/question';
  const router = Router();

  router.post(`${route}/:categoryId`, createQuestion);
  router.get(`${route}/:categoryId`, getAllQuestionsByCategoryId);
  router.get(route, getAllQuestions);
  router.put(`${route}/:questionId`, updateQuestion);
  router.del(`${route}/:questionId`, deleteQuestion);

  return router.routes();
};
