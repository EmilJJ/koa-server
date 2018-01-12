import Sequelize from 'sequelize';
import dbConnection from '../db-connection';
import Question from './Question';

const Category = dbConnection.define('category', {
  title: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
});

Category.hasMany(Question, { foreignKey: 'categoryId', sourceKey: 'id' });

export default Category;
