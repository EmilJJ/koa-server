import Sequelize from 'sequelize';
import dbConnection from '../db-connection';

const Variant = dbConnection.define('variant', {
  text: Sequelize.STRING,
  questionId: Sequelize.INTEGER,
});

export default Variant;
