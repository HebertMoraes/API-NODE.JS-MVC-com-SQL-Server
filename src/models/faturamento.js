const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Faturamento extends sequelize.Model { }


Faturamento.init(
    {
        Id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Mes: 
        {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        Gastos: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        Faturamento: 
        {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        Lucro: 
        {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false,
        },
        DataAtualizacao:
        {
            type: sequelize.DATE,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName: 'tbFaturamento', shema
    }
)

module.exports = Faturamento;