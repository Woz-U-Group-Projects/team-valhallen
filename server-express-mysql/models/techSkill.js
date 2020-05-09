"use strict";
module.exports = (sequelize, DataTypes) => {
  const TechSkill = sequelize.define(
    "TechSkill",
    {
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
  TechSkill.associate = function(models) {
    TechSkill.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return TechSkill;
};