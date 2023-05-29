const ModelCarros = require('../models/carros');
const jwt = require('jsonwebtoken');

module.exports =
{
    async GetAllCars(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
        const { authorization } = req.headers;
        const acess_token = authorization.split(' ')[1];
        try {
            jwt.verify(acess_token, 'exemploDeSecretJWT');
            const carros = await ModelCarros.findAll();
            return res.json(carros);
        } catch (error) {
            // res.status(401).send("Unauthorized");
            res.status(498).json({ message: 'Acess_token expirado!' });
            // return console.error("Erro no GetAll : ", erro);
        }
    },

    async CreateCar(req, res) {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

        try {
            const carro = await ModelCarros.create(
                {
                    //Codigo: req.body.Codigo, // Comentado para gerar automatico
                    Nome: req.body.Nome,
                    Marca: req.body.Marca,
                    Ano: req.body.Ano,
                    Descricao: req.body.Descricao,
                    ValorMin: req.body.ValorMin,
                    ValorMedia: req.body.ValorMedia,
                    ValorMax: req.body.ValorMax,
                    DataCriacao: req.body.DataCriacao,
                    ImgUrl: req.body.ImgUrl,
                    DataAtualizacao: null
                }
            );
            return res.json(carro);

        } catch (erro) {
            return console.error("Erro na Create : ", erro);
        }
    },

    async UpdateCar(req, res) {
        try {

            const carro = await ModelCarros.findByPk(req.body.Id);
            if (carro) {
                carro.Nome = req.body.Nome;
                carro.Marca = req.body.Marca;
                carro.Ano = req.body.Ano;
                carro.Descricao = req.body.Descricao;
                carro.ValorMin = req.body.ValorMin;
                carro.ValorMedia = req.body.ValorMedia;
                carro.ValorMax = req.body.ValorMax;
                carro.DataCriacao = req.body.DataCriacao;
                carro.ImgUrl = req.body.ImgUrl;
                carro.DataAtualizacao = new Date();
                await carro.save();
            }

            return res.json(carro);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOneCar(req, res) {
        try {

            const carro = await ModelCarros.findByPk(req.body.Id);

            return res.json(carro);

        } catch (erro) {
            return console.error("Erro no GetOne : ", erro);
        }
    },

    async DeleteCar(req, res) {
        try {

            const carro = await ModelCarros.findByPk(req.body.Id);
            await carro.destroy();
            return res.json(carro);

        } catch (erro) {
            return console.error("Erro no Delete : ", erro);
        }
    }
}
