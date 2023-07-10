const CadastroModel = require("../model/cadastroModel");

class CadastroController {
    constructor() {

    }

    cadastroView(req, res) {
        let usuario = new CadastroModel();
        res.render('cadastro/cadastrar');
    }

    cadastrarUsuario(req, res) {
        let ok = false;
        let rb = req.body;
        if (rb != null) {
            if (rb.nome != null && rb.email != null && rb.senha != null && rb.confSenha != null && rb.celular != null && rb.nascimento != null && rb.cidade != null && rb.estado > 0 && rb.cep != null) {
                let usuario = new CadastroModel(0, rb.nome, rb.email, rb.senha, rb.confSenha, rb.celular, rb.nascimento, rb.endereco, rb.cidade, rb.estado, rb.cep);
                ok = usuario.gravar();
            }
        }
        res.send({ ok: ok });
    }
}

module.exports = CadastroController;