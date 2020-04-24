"use strict";
module.exports = (sequelize, DataTypes) => {
  const TechSkills = sequelize.define(
    "TechSkills",
    {
      techId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      electrical: DataTypes.BOOLEAN,
      plumbing: DataTypes.BOOLEAN,
      hvac: DataTypes.BOOLEAN,
      appliance: DataTypes.BOOLEAN,
      general: DataTypes.BOOLEAN
    },
    {}
  );
  TechSkills.associate = function(models) {
    // associations can be defined here
  };
  return TechSkills;
};