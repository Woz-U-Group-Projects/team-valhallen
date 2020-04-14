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
      phone: DataTypes.INTEGER,
      select1: DataTypes.STRING,
      select2: DataTypes.STRING,
      select3: DataTypes.STRING,
      select4: DataTypes.STRING,
      select5: DataTypes.STRING,
      additionalComments: DataTypes.STRING
    },
    {}
  );
  Technician.associate = function(models) {
    // associations can be defined here
  };
  return Technician;
};
