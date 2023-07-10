const Database = require('../utils/database');
const conexao = new Database();

class AlbumModel{
    #albumId;
    #albumNome;
    #albumImagem;

    constructor(albumId,albumNome,albumImagem){
        this.#albumId = albumId;
        this.#albumNome = albumNome;
        this.#albumImagem = albumImagem;
    }

    get(){
        return this.#albumId;
    }
    set(albumId){
        this.#albumId = albumId;
    }

    get(){
        return this.#albumNome;
    }
    set(albumNome){
        this.#albumNome = albumNome;
    }

    get(){
        return this.#albumImagem;
    }
    set(albumImagem){
        this.#albumImagem = albumImagem;
    }

}

module.exports = AlbumModel;