"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fName: DataTypes.STRING,
      lName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      userType: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
