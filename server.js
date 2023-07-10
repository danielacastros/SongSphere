//importando os packages instalados
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const HomeRoute = require('./routes/homeRoute');
const CadastroRoute = require('./routes/cadastroRoute');
const LoginRoute = require('./routes/loginRoute');
const Autenticacao = require('./middleware/autenticacao');
const PlaylistRoute = require('./routes/playlistRoute');
//const UsuariosRoute = require('./routes/usuariosRoute');

const app = express();

//configurando a nossa pasta public como o nosso repositorio de arquivos estáticos (css, js, imagens)
app.use(express.static(__dirname + "/public"))

//configuração das nossas views para utilizar a ferramenta EJS
app.set('view engine', 'ejs');

//Configuração de onde ficará nossas views
app.set('views', './views');


//define um title generico para todas as nossas páginas
// a variavel title será chamada no nosso arquivo layout na tag title
app.locals.title = `SongSphere`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configuração da nossa página de layout
app.set('layout', './layout');
app.use(expressLayouts);

//definindo as rotas que o nosso sistema vai reconhecer através da url do navegador
let homeRota = new HomeRoute();
app.use('/', homeRota.router)
let cadastroRota = new CadastroRoute();
app.use('/cadastro', cadastroRota.router);

let loginRota = new LoginRoute();
app.use('/login', loginRota.router);

//let playlistRota = new PlaylistRoute();
//app.use('/playlist', playlistRota.router);

let auth = new Autenticacao();
app.use(auth.usuarioLogado);

//ponto de inicio do nosso servidor web
const server = app.listen('5000', function () {
    console.log('Servidor web iniciado na porta 5000');
});