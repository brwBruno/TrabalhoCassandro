var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Cliente = require('./app/models/clientes');
var Venda = require('./app/models/vendas');

mongoose.connect('mongodb://bru:bru123@ds117701.mlab.com:17701/venda-carros');

app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

var port = process.env.port || 8000;

var router = express.Router();

router.use(function (req, res, next) {
    console.log('Algo esta acontecendo aqui');
    next();
});

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//CRUD de Cliente
//=========================================================================================
router.route('/clientes')

    //Adicionar
    //http://localhost:8000/api/clientes
    .post(function (req, res) {
        var cliente = new Cliente();

        cliente.nome = req.body.nome;
        cliente.sobrenome = req.body.sobrenome;
        cliente.idade = req.body.idade;
        cliente.cpf = req.body.cpf;
        cliente.rg = req.body.rg;
        cliente.sexo = req.body.sexo;
        cliente.empresa = req.body.empresa;
        cliente.cargo = req.body.cargo;
        cliente.renda = req.body.renda;
        cliente.rua = req.body.rua;
        cliente.bairro = req.body.bairro;
        cliente.complemento = req.body.complemento;
        cliente.numero = req.body.numero;
        cliente.cidade = req.body.cidade;
        cliente.estado = req.body.estado;

        cliente.save(function (error){
            if (error)
                res.send('Erro ao salvar');
            res.json({message: 'Cliente cadastrado com sucesso'});
        });
    })

    //Pegar Todos
    //http://localhost:8000/api/clientes
    .get(function (req, res) {
        Cliente.find(function (error, produto) {
            if (error)
                res.send('Erro ao buscar');
            res.json(produto);
        });
    });

router.route('/clientes/:cliente_id')

    //Pegar por Id
    //http://localhost:8000/api/clientes/Id
    .get(function (req, res) {
        Cliente.findById(req.params.cliente_id, function (error, cliente) {
            if (error)
                res.send('Cliente nao encontrado');
            res.json(cliente);
        });
    })

    //Atualizar
    //http://localhost:8000/api/clientes/Id
    .put(function (req, res) {
        Cliente.findById(req.params.cliente_id, function (error, cliente) {
            if (error)
                res.send('Cliente nao encontrado');
            
            cliente.nome = req.body.nome;
            cliente.sobrenome = req.body.sobrenome;
            cliente.idade = req.body.idade;
            cliente.cpf = req.body.cpf;
            cliente.rg = req.body.rg;
            cliente.sexo = req.body.sexo;
            cliente.empresa = req.body.empresa;
            cliente.cargo = req.body.cargo;
            cliente.renda = req.body.renda;
            cliente.rua = req.body.rua;
            cliente.bairro = req.body.bairro;
            cliente.complemento = req.body.complemento;
            cliente.numero = req.body.numero;
            cliente.cidade = req.body.cidade;
            cliente.estado = req.body.estado;
            
            cliente.save(function (error) {
                if (error)
                    res.send('Erro ao atualizar');
                res.json({ message: "Atualizado com sucesso"});
            });
        });
    })

    //Deletar
    //http://localhost:8000/api/clientes/Id
    .delete(function (req, res) {
        Cliente.remove({
            _id: req.params.cliente_id
        }, function (error){
            if (error)
                res.send('Cliente nao encontrado');
            res.json({message: "Deletado com sucesso"});
        });
    });

//CRUD de Venda
//======================================================================================
router.route('/vendas')

    //Adicionar
    //http://localhost:8000/api/vendas
    .post(function (req, res) {
        var venda = new Venda();

        venda.cliente._id = req.body.cliente._id;
        venda.cliente.nome = req.body.cliente.nome;
        venda.cliente.cpf = req.body.cliente.cpf;
        venda.cliente.renda = req.body.cliente.renda;
        venda.carro.modelo = req.body.carro.modelo.modelo;
        venda.carro.marca = req.body.carro.modelo.marca;
        venda.carro.valor = req.body.carro.modelo.valor;
        venda.quantparcela = req.body.quantparcela;
        venda.valorparcela = req.body.valorparcela;
        venda.valordisponivel = req.body.valordisponivel;
        venda.situacao = req.body.situacao;

        venda.save(function (error) {
            if (error)
                res.send('Erro ao salvar');
            res.json({ message: 'Venda cadastrada com sucesso'});
        });
    })

    //Pegar Todos
    //http://localhost:8000/api/vendas
    .get(function (req, res) {
        Venda.find(function (error, venda) {
            if (error)
                res.send('Erro ao buscar');
            res.json(venda);
        });
    });

router.route('/vendas/:venda_id')

    //Pegar por Id
    //http://localhost:8000/api/vendas/Id
    .get(function (req, res) {
        Venda.findById(req.params.venda_id, function (error, venda) {
            if (error)
                res.send('Venda nao encontrada');
            res.json(venda);
        });
    })

    //Atualizar
    //http://localhost:8000/api/vendas/Id
    .put(function (req, res) {
        Venda.findById(req.params.venda_id, function (error, venda) {
            if (error)
                res.send('Venda nao encontrada');

            venda.cliente._id = req.body.cliente._id;
            venda.cliente.nome = req.body.cliente.nome;
            venda.cliente.cpf = req.body.cliente.cpf;
            venda.cliente.renda = req.body.cliente.renda;
            venda.carro.modelo = req.body.carro.modelo;
            venda.carro.marca = req.body.carro.marca;
            venda.carro.valor = req.body.carro.valor;
            venda.quantparcela = req.body.quantparcela;
            venda.valorparcela = req.body.valorparcela;
            venda.valordisponivel = req.body.valordisponivel;
            venda.situacao = req.body.situacao;

            venda.save(function (error) {
                if (error)
                    res.send('Erro ao atualizar');
                res.json({ message: 'Atualizada com sucesso'});
            });
        });
    })

    //Deletar
    //http://localhost:8000/api/vendas/Id
    .delete(function (req, res) {
        Venda.remove({
            _id: req.params.venda_id
        }, function (error){
            if (error)
                res.send('Venda nao encontrada');
            res.json({message: "Deletado com sucesso"});
        });
    });

app.use('/api',router);

app.listen(port);