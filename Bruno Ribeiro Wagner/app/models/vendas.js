var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;

var VendaSchema = new Schema({
    cliente: {
        _id: String,
        nome: String,
        cpf: String,
        renda: Number
    },
    carro: {
        modelo: String,
        marca: String,
        valor: Number
    },
    quantparcela: Number,
    valorparcela: Number,
    valordisponivel: Number,
    situacao: String
});
module.exports = mongoose.model('Venda', VendaSchema);