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
      unitName: DataTypes.STRING
    },
    {}
  );
  PropertyUnit.associate = function(models) {
    // associations can be defined here
  };
  return PropertyUnit;
};
