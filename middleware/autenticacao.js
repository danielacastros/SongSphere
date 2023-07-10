class Autenticacao {

    constructor() {
    }

    usuarioLogado(req, res, next) {
        if(req.headers.cookie != undefined &&  req.headers.cookie.includes("usuarioLogado") && global.usuarioLogado != undefined) {
            next();
        } else {
            res.redirect("/login");
        }
    }

    usuarioIsAdmin(req, res, next){
        if(req.headers.cookie != undefined &&  req.headers.cookie.includes("usuarioLogado") && global.usuarioLogado != undefined && global.usuarioLogado.perfilId == 1){        
            next();
        } else {
            res.redirect("/nao-autorizado");
        }
    }

}
module.exports = Autenticacao;