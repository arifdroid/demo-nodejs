'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workforces_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // scope: {
      //   belongsTo: models.task.getTableName(),
      //   belongsToColumn: 'fileUpload',
      // },
    }
  };
  workforces_type.init({
    ethnicity: DataTypes.STRING,
    numbers: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'workforces_type',
  });
  return workforces_type;
};