"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserPropertyUnit = sequelize.define(
    "UserPropertyUnit",
    {
      unitId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        autoIncrement: false
      },
      userId: {
        type: DataTypes.INTEGER,
        foreingKey: true,
        autoIncrement: false
      }
    },
    {}
  );
  UserPropertyUnit.associate = function(models) {
    // associations can be defined here
  };
  return UserPropertyUnit;
};
