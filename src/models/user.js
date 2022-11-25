'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nama: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    no_Whatsapp: DataTypes.STRING,
    asal_Kota: DataTypes.STRING,
    pendidikan_terakhir: DataTypes.STRING,
    url_foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};