"use strict";
module.exports = (sequelize, DataTypes) => {
  const TechSkills = sequelize.define(
    "TechSkills",
    {
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      techId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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