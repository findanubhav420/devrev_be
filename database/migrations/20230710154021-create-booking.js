'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.STRING,
        references: {
            model: 'flights',
            key: 'flightId'
        }
      },
      bookingId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      email:{
        type: Sequelize.STRING
      },
      name:{
        type: Sequelize.STRING
      },
      age:{
        type: Sequelize.INTEGER
      },
      phoneNo:{
        type: Sequelize.TEXT
      },
      seat: {
        type: Sequelize.STRING
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
   
    await queryInterface.dropTable('bookings');
  }
};