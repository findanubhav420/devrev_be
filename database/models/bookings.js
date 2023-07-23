'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookings.belongsTo(models.flights, {
        foreignKey: 'flightId'
      });
    }
  }
  bookings.init({
    userId: DataTypes.STRING,
    flightId: DataTypes.STRING,
    bookingId: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phoneNo: DataTypes.TEXT,
    seat: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'bookings',
  });
  return bookings;
};