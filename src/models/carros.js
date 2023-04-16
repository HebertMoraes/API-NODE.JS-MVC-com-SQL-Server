const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Carros extends sequelize.Model { }


Carros.init(
    {
        Id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome: 
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        Valor: {
            type: sequelize.FLOAT,
            allowNull: true,
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
        sequelize: database, modelName: 'tbCarros', shema
    }
)

module.exports = Carros;