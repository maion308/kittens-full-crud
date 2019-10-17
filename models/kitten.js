'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kitten = sequelize.define('Kitten', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING
  }, {});
  Kitten.associate = function(models) {
    // associations can be defined here
  };
  return Kitten;
};