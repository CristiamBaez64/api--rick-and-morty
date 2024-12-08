'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo( models.Gender, {
        foreignKey: 'id',
        targetKey: 'genderId'
      })
      Character.belongsTo( models.Origin, {
        foreignKey: 'id',
        targetKey: 'originId'
      })
      Character.belongsTo( models.Species, {
        foreignKey: 'id',
        targetKey: 'speciesId'
      })
      Character.belongsTo( models.Status, {
        foreignKey: 'id',
        targetKey: 'statusId'
      })
    }
  }
  Character.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    genderId: DataTypes.INTEGER,
    originId: DataTypes.INTEGER,
    speciesId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};