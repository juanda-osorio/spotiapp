import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// contiene varias herramientas, entre ellas hacer peticiones http
import { HttpClientModule } from '@angular/common/http'

//RUTAS (LAS IMPORTA AL CREAR EL FICHERO ROUTING AL CREAR EL PROYECTO)
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    /* AQUI EN 'PROVIDERS' SE COLOCAN LOS SERVICIOS. El servicio que actualmente estamos usando (spotify.service)
    * no aparece aqui porque él mismo contiene un codigo que se autoincluye sin necesidad de ponerlo aqui.
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
