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
      issue: DataTypes.STRING,
      techid: DataTypes.INTEGER,
      complete: DataTypes.BOOLEAN
    },
    {}
  );
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};
