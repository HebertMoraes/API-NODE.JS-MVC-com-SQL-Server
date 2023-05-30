const ModelSale = require('../models/sale');
const jwt = require('jsonwebtoken');

module.exports =
{
    async GetAllSales(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        const { authorization } = req.headers;
        const acess_token = authorization.split(' ')[1];
        try {
            jwt.verify(acess_token, 'exemploDeSecretJWT');
            const sales = await ModelSale.findAll();
            return res.json(sales);
        } catch (error) {
            // res.status(401).send("Unauthorized");
            res.status(498).json({ message: 'Acess_token expirado!' });
            // return console.error("Erro no GetAll : ", erro);
        }
    },

    async CreateSale(req, res) {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');


        const { authorization } = req.headers;
        const acess_token = authorization.split(' ')[1];
        try {
            jwt.verify(acess_token, 'exemploDeSecretJWT');
                try {
                const sale = await ModelSale.create(
                    {
                        //Codigo: req.body.Codigo, // Comentado para gerar automatico
                        NomeCarro: req.body.NomeCarro, 
                        Descricao: req.body.Descricao,
                        Quantidade: req.body.Quantidade,
                        NomeComprador: req.body.NomeComprador,
                        NomeVendedor: req.body.NomeVendedor,
                        Valor: req.body.Valor,
                        DataCriacao: req.body.DataCriacao,
                        DataAtualizacao: null
                    }
                );
                return res.json(sale);

            } catch (erro) {
                return console.error("Erro na Create : ", erro);
            }
        } catch (error) {
            // res.status(401).send("Unauthorized");
            res.status(498).json({ message: 'Acess_token expirado!' });
            // return console.error("Erro no GetAll : ", erro);
        }


        // const { authorization } = req.headers;
        // const acess_token = authorization.split(' ')[1];
        // try {
        //     jwt.verify(acess_token, 'exemploDeSecretJWT');
            
        //     try {
        //         const sale = await ModelSale.create(
        //             {
        //                 //Codigo: req.body.Codigo, // Comentado para gerar automatico
        //                 NomeCarro: req.body.NomeCarro, 
        //                 Descricao: req.body.Descricao,
        //                 Quantidade: req.body.Quantidade,
        //                 NomeComprador: req.body.NomeComprador,
        //                 NomeVendedor: req.body.NomeVendedor,
        //                 Valor: req.body.Valor,
        //                 DataCriacao: req.body.DataCriacao,
        //                 DataAtualizacao: null
        //             }
        //         );
        //         return res.json(sale);

        //     } catch (erro) {
        //         return console.error("Erro na Create : ", erro);
        //     }
        // } catch (error) {
        //     // res.status(401).send("Unauthorized");
        //     res.status(498).json({ message: 'Mas que merda!' });
        //     // return console.error("Erro no GetAll : ", erro);
        // }
    },

    async UpdateSale(req, res) {

        const { authorization } = req.headers;
        const acess_token = authorization.split(' ')[1];
        try {
            jwt.verify(acess_token, 'exemploDeSecretJWT');
            try {
                const sale = await ModelSale.findByPk(req.body.Id);
                if (sale) {
                    sale.NomeCarro = req.body.NomeCarro;
                    sale.Descricao = req.body.Descricao;
                    sale.Quantidade = req.body.Quantidade;
                    sale.NomeComprador = req.body.NomeComprador;
                    sale.NomeVendedor = req.body.NomeVendedor;
                    sale.DataCriacao = req.body.DataCriacao;
                    sale.Valor = req.body.Valor;
                    sale.DataAtualizacao = new Date();
                    await sale.save();
                }

                return res.json(sale);

            } catch (erro) {
                return console.error("Erro na Update : ", erro);
            }
        } catch (error) {
            // res.status(401).send("Unauthorized");
            res.status(498).json({ message: 'Acess_token expirado!' });
            // return console.error("Erro no GetAll : ", erro);
        }
    },

    async GetOneSale(req, res) {

        const { authorization } = req.headers;
        const acess_token = authorization.split(' ')[1];
        try {
            jwt.verify(acess_token, 'exemploDeSecretJWT');
            try {

                const sale = await ModelSale.findByPk(req.body.Id);

                return res.json(sale);

            } catch (erro) {
                return console.error("Erro no GetOne : ", erro);
            }
        } catch (error) {
            // res.status(401).send("Unauthorized");
            res.status(498).json({ message: 'Acess_token expirado!' });
            // return console.error("Erro no GetAll : ", erro);
        }
    },

    async DeleteSale(req, res) {

        const { authorization } = req.headers;
        const acess_token = authorization.split(' ')[1];
        try {
            jwt.verify(acess_token, 'exemploDeSecretJWT');
            try {
                const sale = await ModelSale.findByPk(req.body.Id);
                await sale.destroy();
                return res.json(sale);

            } catch (erro) {
                return console.error("Erro no Delete : ", erro);
            }
        } catch (error) {
            // res.status(401).send("Unauthorized");
            res.status(498).json({ message: 'Acess_token expirado!' });
            // return console.error("Erro no GetAll : ", erro);
        }
    }
}
