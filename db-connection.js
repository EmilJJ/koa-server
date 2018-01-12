import Sequelize from 'sequelize';
import path from 'path';
import config from './config/db';

const connection = new Sequelize(config.name, config.userName, config.password, {
  ...config.options,
  modelPaths: [path.resolve(__dirname, '/models')],
});

export default connection;
