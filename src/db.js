const sequelize = require('sequelize');
const database = new  sequelize('Lamborghini','sa','senhaBacana',
{
    dialect:'mssql', host:'localhost',port:49719
});

database.sync();

module.exports = database;