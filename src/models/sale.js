const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Sale extends sequelize.Model { }


Sale.init(
    {
        Id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        NomeCarro: 
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        Quantidade: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        NomeComprador: 
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        NomeVendedor: 
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        Valor: {
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
        sequelize: database, modelName: 'tbSales', shema
    }
)

module.exports = Sale;