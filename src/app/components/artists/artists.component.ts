import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styles: [
  ]
})
export class ArtistsComponent implements OnInit {

  artista: any = {};
  tracks: any = [];
  loading: boolean;

  constructor(private _aRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this._aRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
      /*console.log(params);
      this.spotify.routeArtist(params['id']).subscribe(data => {
        this.artista = data;
        this.loading = false;
      });*/
    });
  }

  getTopTracks(id){
    this.spotify.getTopTracks(id).subscribe(data => {
      this.tracks = data;
      console.log(this.tracks);
    });
  }

  getArtist(id){
    console.log(id);
    this.spotify.routeArtist(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
