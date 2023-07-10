const PlaylistModel = require('../model/playlistModel');

class PlaylistController {
    async playlistView(req, res) {
        let playlist = new PlaylistModel();
        let listaPlay = playlist.listar();
        res.render('/playlist/index', { listaPlay: listaPlay })
    }
}

module.exports = PlaylistController;