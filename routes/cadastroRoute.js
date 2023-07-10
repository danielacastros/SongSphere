const express = require('express');
const CadastroController = require('../controllers/cadastroController');

class CadastroRouter {
    #router;

    get router() {
        return this.#router;
    }
    set router(router) {
        this.#router = router;
    }
    constructor() {

        this.#router = express.Router();
        let ctrl = new CadastroController();
        this.#router.get('/', ctrl.cadastroView);
        this.#router.post('/cadastrar', ctrl.cadastrarUsuario)
        
    }

}

module.exports = CadastroRouter;