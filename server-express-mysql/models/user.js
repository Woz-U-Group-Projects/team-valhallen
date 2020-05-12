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
      userType: DataTypes.STRING,
      archive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      unitId: DataTypes.INTEGER,
      unitName: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Ticket, { foreignKey: 'userId' });
    User.hasMany(models.TechSkill, { foreignKey: 'userId'});
  };
  return User;
};
