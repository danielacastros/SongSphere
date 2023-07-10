const express = require('express');
const PlaylistController = require('../controllers/playlistController');
const Autenticacao = require('../middleware/autenticacao');

class PlaylistRoute{
    #router

    get(){
        return this.#router;
    }
    set(router){
        this.#router = router;
    }

    constructor(){
        this.#router = express.Router();
        let auth = new Autenticacao();
        let ctrl = new PlaylistController();
        this.#router.get('/', auth.usuarioLogado, ctrl.playlistView);
        
    }
}

module.exports = PlaylistRoute;