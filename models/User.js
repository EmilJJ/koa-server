import Sequelize from 'sequelize';
import dbConnection from '../db-connection';

const User = dbConnection.define('user', {
  name: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
  surname: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
  password: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
});

export default User;
