import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //paises: any[] = [];

  // asegurarse de que la variable http la importa de 'angular common', que fué lo que previamente importamos
  // en app.module.ts
  //constructor(private http: HttpClient) { 
    // EJEMPLO DE HTTP.
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (resp: any) =>{
    //       this.paises = resp;
    //       console.log(resp);
    //   })
  //}

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  msgError: string;

  constructor(private _spotify: SpotifyService){

    this.loading = true;
    this.error = false;

    this._spotify.getNewReleases()
      // Si pongo mas codigo después del 'subscribe', entonces es el manejor de ERRORes:
      .subscribe( (data: any) =>{
        this.nuevasCanciones = data;
        console.log("HOME: %O",data);
        this.loading = false;
      }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        this.msgError = errorServicio.error.error.message;
        console.log(errorServicio.error.error.message);
      });

  }

  ngOnInit(): void {
  }

}
