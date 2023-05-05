const sequelize = require('sequelize');
const database = new  sequelize('CarsSalesCrud','sa','senhaBacana',
{
    dialect:'mssql', host:'localhost',port:49719
});

database.sync();

module.exports = database;