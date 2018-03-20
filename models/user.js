import Sequelize from 'sequelize';
import { CLIENT } from '../enums/user.types';
import dbConnection from '../db-connection';

const User = dbConnection.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.INTEGER,
    defaultValue: CLIENT,
  },
});

export default User;
