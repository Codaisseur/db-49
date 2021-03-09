"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "sports",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags");
  },
};
