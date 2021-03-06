'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('change_notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      screenshot_attachment: {
        type: Sequelize.STRING(1000),
        allowNull: true,
        defaultValue: null
      },
      html_attachment: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      shrub_rule: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shrub: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      shrub_cache: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      shrub_calc_cache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      check_datetime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_note: {
        type: Sequelize.STRING(1000),
        defaultValue: null
      },
      rule_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'rules',
          },
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: true,
        defaultValue: null
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('change_notes')
  },
}
