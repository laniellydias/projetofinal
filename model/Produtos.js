let {Sequelize, DataTypes} = require("sequelize");
let db = require("../../db");

const Produtos = db.define("Produtos",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        datas : {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantidade: DataTypes.STRING
    }
);

module.exports = Produtos;
