const express = require('express');
const LoginController = require('../controllers/loginController');
const Autenticacao = require('../middleware/autenticacao');

class LoginRoute {
    #router

    get router() {
        return this.#router
    }

    set router(router) {
        this.#router = router;
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new LoginController();
        let auth = new Autenticacao();

        this.#router.get('/', ctrl.loginView)
        //this.#router.get('/', auth.usuarioLogado)
    }
}

module.exports = LoginRoute;