"use strict";
module.exports = (sequelize, DataTypes) => {
  const Technician = sequelize.define(
    "Technician",
    {
      techId: {
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
  Technician.associate = function(models) {
    // associations can be defined here
  };
  return Technician;
};
