import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class People extends Model {

    static associate(models) {
      
    }
  }

  People.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'people',
  });
  return People;
};