"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "personal list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "work list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sports list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists");
  },
};
