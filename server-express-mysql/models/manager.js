"use strict";
module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define(
    "Manager",
    {
      mgrId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fName: DataTypes.STRING,
      lName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.INTEGER
    },
    {}
  );
  Manager.associate = function(models) {
    // associations can be defined here
  };
  return Manager;
};