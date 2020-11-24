import { Component, OnInit } from '@angular/core';

//Para hacer peticiones HTTP
//import { HttpClient } from '@angular/common/http';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*paises: any = [];

  constructor(private http: HttpClient) { 
    this.http.get('https://restcountries.eu/rest/v2/region/americas').subscribe((data) => {
      this.paises = data;
      console.log(this.paises);
    });
   }*/

   releases: any = [];
   loading: boolean;
   error : boolean;
   mensajeError: string;

  constructor(private spotify: SpotifyService){
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.releases = data;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
