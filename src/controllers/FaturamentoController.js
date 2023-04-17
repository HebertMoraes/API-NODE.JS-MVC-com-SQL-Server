const ModelFaturamento = require('../models/faturamento');

module.exports =
{
    async GetAllFaturamentos(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        try {
            const faturamento = await ModelFaturamento.findAll();
            return res.json(faturamento);

        } catch (erro) {
            return console.error("Erro no GetAll : ", erro);
        }
    },

    async CreateFaturamento(req, res) {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

        try {
            const faturamento = await ModelFaturamento.create(
                {
                    //Codigo: req.body.Codigo, // Comentado para gerar automatico
                    Mes: req.body.Mes, 
                    Descricao: req.body.Descricao,
                    Gastos: req.body.Gastos,
                    Faturamento: req.body.Faturamento,
                    Lucro: req.body.Lucro,
                    DataCriacao: req.body.DataCriacao,
                    DataAtualizacao: null
                }
            );
            return res.json(faturamento);

        } catch (erro) {
            return console.error("Erro na Create : ", erro);
        }
    },

    async UpdateFaturamento(req, res) {
        try {

            const faturamento = await ModelFaturamento.findByPk(req.body.Id);
            if (faturamento) {
                faturamento.Mes = req.body.Mes;
                faturamento.Descricao = req.body.Descricao;
                faturamento.Gastos = req.body.Gastos;
                faturamento.Faturamento = req.body.Faturamento;
                faturamento.Lucro = req.body.Lucro;
                faturamento.DataCriacao = req.body.DataCriacao;
                faturamento.DataAtualizacao = new Date();
                await faturamento.save();
            }

            return res.json(faturamento);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOneFaturamento(req, res) {
        try {

            const faturamento = await ModelFaturamento.findByPk(req.body.Id);

            return res.json(faturamento);

        } catch (erro) {
            return console.error("Erro no GetOne : ", erro);
        }
    },

    async DeleteFaturamento(req, res) {
        try {

            const faturamento = await ModelFaturamento.findByPk(req.body.Id);
            await faturamento.destroy();
            return res.json(faturamento);

        } catch (erro) {
            return console.error("Erro no Delete : ", erro);
        }
    }
}
