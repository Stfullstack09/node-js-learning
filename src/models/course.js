"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Course.belongsTo(models.User, {
                foreignKey: "userId",
                as: "UserData",
            });
        }
    }
    Course.init(
        {
            title: DataTypes.STRING,
            level: DataTypes.STRING,
            image: DataTypes.STRING,
            description: DataTypes.TEXT("long"),
            videoID: DataTypes.STRING,
            isDelete: DataTypes.STRING,
            isPublic: DataTypes.STRING,
            userId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Course",
        }
    );
    return Course;
};
