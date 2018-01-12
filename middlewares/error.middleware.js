import logger from '../services/logger.service';

const errorMiddleware = () => async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    logger.logError(error);
    ctx.status = error.status || 500;
    ctx.body = error.message;
  }
};

export default errorMiddleware;
