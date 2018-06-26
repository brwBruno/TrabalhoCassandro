var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    nome: String,
    sobrenome: String,
    idade: Number,
    cpf: String,
    rg: String,
    sexo: String,
    empresa: String,
    cargo: String,
    renda: Number,
    rua: String,
    bairro: String,
    complemento: String,
    numero: Number,
    cidade: String,
    estado: String
});

module.exports = mongoose.model('Cliente',ClienteSchema);