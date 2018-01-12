import Sequelize from 'sequelize';
import dbConnection from '../db-connection';

const Answer = dbConnection.define('answer', {
  questionId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER,
});

export default Answer;
