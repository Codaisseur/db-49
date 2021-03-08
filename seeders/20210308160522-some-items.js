"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Finish work",
          deadline: "Tomorrow",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Laundry",
          deadline: "Tomorrow",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Football",
          deadline: "Today",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Clean room",
          deadline: "Today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems");
  },
};
