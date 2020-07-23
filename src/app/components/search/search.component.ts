import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistasBuscados: any[] = [];
  loading: boolean;

  constructor(private _spotify: SpotifyService) {
    
  }

  buscar(termino: string){
    this.loading = true;
    console.log(termino);

    this._spotify.getArtistas( termino )
      .subscribe( (data: any) =>{
        this.artistasBuscados = data;
        console.log("SEARCH: %O",data);
        this.loading = false;
      })
  }

  ngOnInit(): void {
  }

}
