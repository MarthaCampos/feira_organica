/**
 * Arquivo: produto.js
 * author: Michael
 * descrição: arquivo responsável onde trataremos o modelo da classe produto
 * data: 22/02/2018
 */

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

/**
 * produto
 -> Id: int
 -> Nome: string  
 -> peso: Number
 -> preco: Number
 > descricao: string
 */

 let ProdutoSchema = new Schema ({
     nome: String,
     preco: Number,
     descricao: String,
     peso:Number
 });

 module.export = mongoose.model('produto', ProdutoSchema);