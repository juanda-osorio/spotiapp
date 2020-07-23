import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  artista: any = {};
  loading: boolean;
  top_tracks: any[] = [];

  constructor(private _router: ActivatedRoute, 
              private _spotify: SpotifyService) {
                
      this.loading = true;

      this._router.params.subscribe( parametros =>{
        // console.log("Parametros ARTISTA: %O",parametros['id']);
        this.obtenerArtista(parametros['id']);
        this.getTopTracks(parametros['id']);
      })
  }

  obtenerArtista(idArtista: string){
    this._spotify.getArtista(idArtista)
      .subscribe( artista =>{
          // console.log("(artista.component) getArtista: %O",artista);  
          this.artista = artista;
          this.loading = false;
      });
  }

  getTopTracks(id: string){
    this._spotify.getTopTracks(id)
      .subscribe( (topTracks: any[]) =>{
        console.log('(artista.component) TOP TRACKS: %O', topTracks);
        this.top_tracks = topTracks;
      })
  }
 

}
