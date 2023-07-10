const Database = require('../utils/database');
const conexao = new Database();

class ArtistaModel {
    #artistaId;
    #artistaNome;
    #artistaImagem;

    constructor(artistaId, artistaNome, artistaImagem) {
        this.#artistaId = artistaId;
        this.#artistaNome = artistaNome;
        this.#artistaImagem = artistaImagem;
    }

    get() {
        return this.#artistaId;
    }
    set(artistaId) {
        this.#artistaId = artistaId;
    }

    get() {
        return this.#artistaNome;
    }
    set(artistaNome) {
        this.#artistaNome = artistaNome;
    }

    get() {
        return this.#artistaImagem;
    }
    set(artistaImagem) {
        this.#artistaImagem = artistaImagem;
    }

    async listar() {
        let sql = "select * from tb_artista"
        let listaResultado = []
        let linhasConsulta = await conexao.ExecutaComando(sql);
        for (var i = 0; i < linhasConsulta.length; i++) {
            listaResultado.push(new ArtistaModel([linhasConsulta[i]]["art_id"], [linhasConsulta[i]]["art_nome"]));
        }
        return listaResultado
    }
}

module.exports = ArtistaModel;