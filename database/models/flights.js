'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      flights.hasMany(models.bookings, {
        foreignKey: 'flightId'
      });
    }
  }
  flights.init({
    flightId: DataTypes.STRING,
    companyName: DataTypes.STRING,
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    departureTime: DataTypes.DATE,
    arrivalTime: DataTypes.DATE,
    seat: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};