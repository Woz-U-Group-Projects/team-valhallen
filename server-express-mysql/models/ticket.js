"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "Ticket",
    {
      ticketId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      unitId: DataTypes.INTEGER,
      note: DataTypes.STRING,
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      creationDate: DataTypes.DATE,
      category: DataTypes.STRING,
      access: DataTypes.BOOLEAN,
      priority: DataTypes.INTEGER,
      status: DataTypes.STRING,
      assigned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      dueDate: DataTypes.DATE,
      completeDate: DataTypes.DATE,
      archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      mainNote: {
        type: DataTypes.STRING,
        allowNull: true
      }

    },
    {}
  );
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.User, {as: 'ticketUser', foreignKey: 'userId'});
    Ticket.belongsTo(models.User, {as: 'ticketTech', foreignKey: 'techId'});
  };
  return Ticket;
};
