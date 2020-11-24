import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) {}

  resultados: any = [];
  loading: boolean;
  error : boolean;
  mensajeError: string;

  buscar(term){
    if(term==='')
      return this.resultados = [];
    this.loading = true;
    this.spotify.getArtists(term).subscribe((data: any) => {
      this.resultados = data;
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
