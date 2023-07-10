const CadastroModel = require('../model/cadastroModel')

class LoginController {

    async loginView(req, res) {
        res.render('login/index', { layout: 'login/index' });
    }

    async autenticarUsuario(){
        if(req.body.inputEmail != "" && req.body.inputSenha != ""){
            let usuario = new CadastroModel();
            usuario = await usuario.autenticarUsuario(req.body.inputEmail, req.body.inputSenha)
            if(usuario != null) {
                res.cookie("usuarioLogado", usuario.usuarioId);
                global.usuarioLogado = usuario;
                res.redirect("/");
            }
            else{

                res.render('login/index', { msgErro: "Usuário ou senha inválidos", layout: 'login/index' })
            }
        }
        else{
            res.render('login/index', { msgErro: "Preencha os campos corretamente", layout: 'login/index' })
        }
    }
}

module.exports = LoginController;