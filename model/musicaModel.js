const Database = require('../utils/database');
const conexao = new Database();

class MusicaModel {
    #musicaId;
    #musicaNome;
    #artistaId;
    #estiloId;
    #albumId;
    #musicaLancamento;

    constructor(musicaId, musicaNome, artistaId, estiloId, albumId, musicaLancamento) {
        this.#musicaId = musicaId;
        this.#musicaNome = musicaNome;
        this.#artistaId = artistaId;
        this.#estiloId = estiloId;
        this.#albumId = albumId;
        this.#musicaLancamento = musicaLancamento;
    }

    get() {
        return this.#musicaId
    }
    set(musicaId) {
        this.#musicaId = musicaId;
    }

    get() {
        return this.#musicaNome
    }
    set(musicaNome) {
        this.#musicaNome = musicaNome;
    }

    get() {
        return this.#artistaId
    }
    set(artistaId) {
        this.#artistaId = artistaId;
    }

    get() {
        return this.#estiloId
    }
    set(estiloId) {
        this.#estiloId = estiloId;
    }

    get() {
        return this.#albumId
    }
    set(albumId) {
        this.#albumId = albumId;
    }

    get() {
        return this.#musicaLancamento
    }
    set(musicaLancamento) {
        this.#musicaLancamento = musicaLancamento;
    }


}

module.exports = MusicaModel;