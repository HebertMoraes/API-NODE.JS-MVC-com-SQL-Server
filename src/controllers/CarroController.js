const ModelCarros = require('../models/carros');

module.exports =
{
    async GetAll(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        try {
            const carros = await ModelCarros.findAll();
            return res.json(carros);

        } catch (erro) {
            return console.error("Erro no GetAll : ", erro);
        }
    },

    async Create(req, res) {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

        try {
            const carro = await ModelCarros.create(
                {
                    //Codigo: req.body.Codigo, // Comentado para gerar automatico
                    Nome: req.body.Nome, 
                    Descricao: req.body.Descricao,
                    Valor: req.body.Valor,
                    DataCriacao: req.body.DataCriacao,
                    DataAtualizacao: null
                }
            );
            return res.json(carro);

        } catch (erro) {
            return console.error("Erro na Create : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const carro = await ModelCarros.findByPk(req.body.Id);
            if (carro) {
                carro.Nome = req.body.Nome;
                carro.Descricao = req.body.Descricao;
                carro.Valor = req.body.Valor;
                carro.DataAtualizacao = new Date();
                await carro.save();
            }

            return res.json(carro);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const carro = await ModelCarros.findByPk(req.body.Id);

            return res.json(carro);

        } catch (erro) {
            return console.error("Erro no GetOne : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const carro = await ModelCarros.findByPk(req.body.Id);
            await carro.destroy();
            return res.json(carro);

        } catch (erro) {
            return console.error("Erro no Delete : ", erro);
        }
    }


}
