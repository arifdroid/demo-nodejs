'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materials_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  materials_type.init({
    materials_name: DataTypes.STRING,
    numbers: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'materials_type',
  });
  return materials_type;
};