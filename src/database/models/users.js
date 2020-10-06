'use strict';
const {
  Model
} = require('sequelize');
const { WatchDirectoryFlags } = require('typescript');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.site_logs,{
        foreignKey:'site_log_id'
      })
     
    }
  };
  users.init({
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    

  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};