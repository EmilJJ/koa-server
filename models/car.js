import Sequelize from 'sequelize';
import dbConnection from '../db-connection';

const Car = dbConnection.define('car', {
  ownerId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productionYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Car;
