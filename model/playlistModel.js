const Database = require('../utils/database');
const conexao = new Database();

class PlaylistModel {
    #playlistId;
    #playlistNome;

    constructor(playlistId, playlistNome) {
        this.#playlistId = playlistId;
        this.#playlistNome = playlistNome;
    }

    get() {
        return this.#playlistId;
    }
    set(playlistId) {
        this.#playlistId = playlistId;
    }

    get() {
        return this.#playlistNome;
    }
    set(playlistNome) {
        this.#playlistNome = playlistNome;
    }

    async listar() {
        let sql = "select * from tb_playlist"
        let listaResultado = []
        let linhasConsulta = await conexao.ExecutaComando(sql);
        for (var i = 0; i < linhasConsulta.length; i++) {
            listaResultado.push(new PlaylistModel([linhasConsulta[i]]["play_id"], [linhasConsulta[i]]["play_nome"]));
        }
        return listaResultado
    }
}

module.exports = PlaylistModel;