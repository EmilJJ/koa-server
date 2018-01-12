import Sequelize from 'sequelize';
import dbConnection from '../db-connection';

const Question = dbConnection.define('question', {
  text: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
  order: {
    type: Sequelize.INTEGER,
    notEmpty: true,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    notEmpty: true,
  },
});

export default Question;
