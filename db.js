let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres: // sksuogynhrncrj : cc8e38ebb22ab9e3ed6ac62042c20c1db7cb8473652d262b1794dca315be2abd @ ec2-54-159-175-113.compute-1.amazonaws.com : 5432 / d39g8tuvc0ukuu",
    {
        dialect: "postgres",
        dialectOpitions: {
            ssl: {
                rejectUnawthorized: false, // very importat
            }
        }
    });

    module.exports = db;