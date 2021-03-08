"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          age: 30,
          email: "john@doe.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mary Doe",
          age: 23,
          email: "mary@doe.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Johnny Doe",
          age: 10,
          email: "johnny@doe.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Doe 2",
          age: 30,
          email: "john2@doe.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
