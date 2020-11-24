import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Para hacer funcionar nuestras rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

//Para hacer peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
import { NoImagePipe } from './pipes/noImage/no-image.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/shared/login/login.component';
import { DomSeguroPipe } from './pipes/domSeguro/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    SearchComponent,
    NavbarComponent,
    NoImagePipe,
    CardsComponent,
    LoginComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
