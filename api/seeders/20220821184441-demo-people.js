'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{
      name: "Pedro Mascal",
      active: true,
      email: "pedrofsm@gmail.com",
      role: "Student",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Maria do Carmo",
      active: true,
      email: "mariinha123@gmail.com",
      role: "Student",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Valeria Silva",
      active: true,
      email: "vsenglish@hotmail.com",
      role: "Student",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Victor Felipe",
      active: true,
      email: "victor.felipe@gmail.com",
      role: "Student",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Paula matias",
      active: true,
      email: "paula.matias@gmail.com",
      role: "Instructor",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Henalda",
      active: true,
      email: "henalda@gmail.com",
      role: "Instructor",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
