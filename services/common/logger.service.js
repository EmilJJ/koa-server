import winston from 'winston';

class LoggerService {
  constructor(logger) {
    this.logger = logger;
  }

  logInfo(info) {
    this.logger.log('info', info);
  }
  logError(error) {
    this.logger.log('error', error);
  }
}

export default new LoggerService(winston);
