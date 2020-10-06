'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class site_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      site_logs.hasMany(models.workforces_type,{
        foreignKey:'work_force_details_id'
      })

      site_logs.hasMany(models.materials_type,{
        foreignKey:'material_site_id'
      })

      site_logs.hasMany(models.tools_type,{
        foreignKey:'tools_type_id'
      })
    }
  };
  site_logs.init({
    project_name: DataTypes.STRING,
    location: DataTypes.STRING,
    contractor: DataTypes.STRING,
    contractor_no: DataTypes.STRING,
    current_weather: DataTypes.STRING,    
    workDone:DataTypes.TEXT,
    workDelayed:DataTypes.TEXT,
    instructions:DataTypes.TEXT,
    visitors:DataTypes.STRING,
    test_done:DataTypes.TEXT,
    site_supervisor_comment:DataTypes.TEXT,
    
  }, {
    sequelize,
    modelName: 'site_logs',
  });
  return site_logs;
};