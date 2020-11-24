import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getQuery(query: string){
    //Se declaran los headers para nuestras peticiones
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQA1etCIdWS3yGolFNukMdOg7mS_w0Q13EpttdXLbapLve2FXncBA_RlQSwPbExivq4pIwdsP46VGre2JxQ'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url,{headers});
  }

  getNewReleases(){
    /*const headers = new HttpHeaders({
      Authorization : 'Bearer BQBHI962n9B_OY9NXfT0eqgD3h7_nMWZ3ZErreFo-atPcG1hh22lK8qUUYcrISXmNMnNkeThZ5RFX14H09Y'
    });*/
    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map(data => {
      return data['albums'].items;
    }));*/
    return this.getQuery('browse/new-releases').pipe(map(data => {
      return data['albums'].items;
    }))
  }

  getArtists(term){
    /*const headers = new HttpHeaders({
      Authorization : 'Bearer BQBHI962n9B_OY9NXfT0eqgD3h7_nMWZ3ZErreFo-atPcG1hh22lK8qUUYcrISXmNMnNkeThZ5RFX14H09Y'
    });*/
    /*return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`, {headers}).pipe(map(data => {
      return data['artists'].items;
    }));*/
    return this.getQuery(`search?q=${term}&type=artist`).pipe(map(data => {
      return data['artists'].items;
    }))
  }

  routeArtist(id){
    return this.getQuery(`artists/${id}`).pipe(map(data => {
      return data;
    }));
  }

  getTopTracks(id){
    return this.getQuery(`artists/${id}/top-tracks?market=MX`).pipe(map(data => data['tracks']));
  }
}
