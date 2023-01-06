'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enrollment.belongsTo(models.People, {
        foreignKey: "studentId"
      })
      Enrollment.belongsTo(models.Classes, {
        foreignKey: "classId"
      })
    }
  }
  Enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Enrollment',
  });
  return Enrollment;
};