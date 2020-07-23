import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  // ESTA LINEA SIRVE PARA IMPORTAR SERVICIOS DE FORMA AUTOMATICA SIN TENER QUE IMPORTARLOS MANUALMENTE EN EL APP.MODULE.TS
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Servicio Spotify Preparado!!");
  }


  getQuery( query: string){
    /* NO sé muy bien por qué usa la sintaxis de abrir llaves dentro del parentesis.
     * Importamos HttpHeaders para pasarle los headers que se necesitan en la conexion a la api. 
     * Tal como vimos en el postman
    */
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQASwDHmPAMxqEneJKamHETRgR6fYs_whaNwyI2JaJiZMFW40DQPRujGKy00nrUD1QMNmtJHovq0lXjBfOQ'
    });
    const url =  `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, {headers});
  }

  


  getNewReleases(){    
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => {
      console.log(data);
          return data['albums'].items;
        }))
  }
     
  getArtistas(termino: string){    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      // en las funciones de flecha si el return es una sola linea, se puede suprimir:
        .pipe( map( data => data['artists'].items ));
  }


  getArtista( idArtist: string){    
    return this.getQuery(`artists/${ idArtist }`);
      // Los datos son 'simples' no hizo falta usar el map.
      // .pipe( map( data =>  data ) )
  }

  getTopTracks( idArtist: string){    
    return this.getQuery(`artists/${ idArtist }/top-tracks?country=es`)
      .pipe( map( data =>  data['tracks'] ) );
  }
  

}
