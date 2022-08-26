"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Turmas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Pessoas", key: "id" },
      },
      nivel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Niveis", key: "id" },
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Turmas");
  },
};
