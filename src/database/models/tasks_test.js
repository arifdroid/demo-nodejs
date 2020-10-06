'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks_test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tasks_test.hasMany(models.files_test,{
        scope:{
          belongsTo: models.tasks_test.getTableName(),
          belongsToColumn: 'fileUpload',
        }
      })
    }
  };
  tasks_test.init({
    tasks_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tasks_test',
  });
  return tasks_test;
};