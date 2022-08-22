import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class People extends Model {

    static associate(models) {
      
    }
  }
  people.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'people',
  });
  return People;
};