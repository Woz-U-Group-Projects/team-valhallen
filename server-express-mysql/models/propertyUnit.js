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
      userId: {
        type: DataTypes.INTEGER,
        foreingKey: true,
        autoIncrement: false
      },
      unitName: DataTypes.STRING
    },
    {}
  );
  PropertyUnit.associate = function(models) {
    // associations can be defined here
  };
  return PropertyUnit;
};
