const PlaylistModel = require('../model/playlistModel');
const ArtistaModel = require('../model/artistaModel');
const MusicaModel = require('../model/musicaModel')

class HomeController{
    constructor(){

    }

    homeView(req, resp){
        
        let playlist = new PlaylistModel();
        let listaPlaylist = playlist.listar();

        //let descobertas = new MusicaModel();
        //let listaMusicas = descobertas.listarDescobertas();

        let artista = new ArtistaModel();
        let listaArtistas = artista.listar();

        resp.render('home/index',{ listaPlaylist: listaPlaylist, listaArtistas: listaArtistas});
    }
}

module.exports = HomeController;