const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class People extends Model {

    static associate(models) {
      People.hasMany(models.Classes, {
        foreignKey: "professorId"
      })
      People.hasMany(models.Enrollment, {
        foreignKey: "studentId"
      })
    }
  }

  People.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};