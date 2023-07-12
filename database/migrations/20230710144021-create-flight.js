'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      companyName:{
        type: Sequelize.STRING
      },
      source:{
        type: Sequelize.STRING
      },
      destination:{
        type: Sequelize.STRING
      },
      departureTime:{
        type: Sequelize.DATE
      },
      arrivalTime:{
        type: Sequelize.DATE
      },
      seat: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }, 
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};