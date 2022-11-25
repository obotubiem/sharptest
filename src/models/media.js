"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init(
    {
      small: DataTypes.STRING,
      large: DataTypes.STRING,
      original: DataTypes.STRING,
      name: DataTypes.STRING,
      mimeType: DataTypes.STRING,
      smallUrl: {
        type: DataTypes.VIRTUAL,
        get() {
          if (this.small) return `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/uploads/${this.small}`;
          return null;
        },
      },
      largeUrl: {
        type: DataTypes.VIRTUAL,
        get() {
          if (this.large) return `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/uploads/${this.large}`;
          return null;
        },
      },
    },
    {
      sequelize,
      modelName: "Media",
    }
  );
  return Media;
};
