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
        Marca: {
            type: sequelize.STRING,
            allowNull: false,
        },
        Ano: {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        ValorMin: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        ValorMedia: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        ValorMax: {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false,
        },
        ImgUrl: {
            type: sequelize.STRING,
            allowNull: true,
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