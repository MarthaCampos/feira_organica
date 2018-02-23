//chamando os pacotes
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Produto = require('./app/modules/produto');

//URI:MLAB
//mongoose.connect('mongodb://mikelemos:mike123@ds247178.mlab.com:47178/project-organic-api')
// o pacote do mongoose acima vai conectar com o banco de dados de maneira remota que esta hospedado no mlab e vai 
//criar um modelo de esquema via mongoose, vamos fazer a msm chamada que fizemos no produto.js.


// Maneira local: mongodb
mongoose.connect('mongodb://localhost/project-organic-api');

// configuração da variável app para usar o bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
/*
vamos estar retornando dados a partir de um json e um post.
ex: quando for testar uma ipi ele vai nos retornar um json.

*/
// definindo a porta de execução de nossa api
let port = process.env.port || 8000;

// Rotas da nossa API: ( aqui iremos começar a definir nossas rotas)
//===============================================================================================
// definindo nossas rotas, mas o ideal era criar uma pasta routes com 
// um arquivo chamado routes.js. 
//Criando uma instância das rotas via Express
let router = express.Router();

router.use(function(req, res,next) {
  console.log('algo está acontecendo aqui'); 
  next(); 
});
// O NEXT(); vai garantir que nossa rota continue prosseguindo. 
// Rota de exemplo.
router.get('/', function(req,res){
  res.json({message: ' olá, eu sou o goku'})

});

//API´s:
//===========================================================================

// rotas que terminarem com '/produtos'(servir:GET & POST)
 router.route('/produtos')

 /* 1) método: Criarproduto(acessar e:POST http://localhost:8000/api/produtos)*/

.post( function(req, res){
  var produto = new Produto();
  // aqui vamos setar os campos do produto (via request);
  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.descricao = req.body.descricao;

  produto.save(function(error){
    if(error)
         res.send('Erro ao tentar salvar o produto' + error);
    res.json({message: 'produto cadastrado com sucesso!'});
  });
});


// definindo um padrão das rotas prefixadas:'/api':
app.use('/api',router);
//Iniciando a aplicação (servidor;)
app.listen(port);
console.log('iniciando a app na porta'+ port);