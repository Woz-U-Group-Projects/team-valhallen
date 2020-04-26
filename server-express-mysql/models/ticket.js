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
      userId: DataTypes.INTEGER,
      note: DataTypes.STRING,
      techid: DataTypes.INTEGER,
      complete: DataTypes.BOOLEAN,
      creationDate: DataTypes.DATE,
      category: DataTypes.STRING,
      access: DataTypes.BOOLEAN,
      priority: DataTypes.INTEGER,
      status: DataTypes.STRING,
      assigned: DataTypes.BOOLEAN,
      dueDate: DataTypes.DATE,
      accessDate: DataTypes.DATE,
      mainNote: DataTypes.STRING

    },
    {}
  );
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};
