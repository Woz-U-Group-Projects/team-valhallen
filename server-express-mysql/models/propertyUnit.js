"use strict";
module.exports = (sequelize, DataTypes) => {
  const PropertyUnit = sequelize.define(
    "PropertyUnit",
    {
      unitId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: DataTypes.INTEGER,
      techId: DataTypes.INTEGER,
      ticketId: DataTypes.INTEGER
    },
    {}
  );
  PropertyUnit.associate = function(models) {
    // associations can be defined here
  };
  return PropertyUnit;
};
