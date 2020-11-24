import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() Items : any[] = [];

  constructor(private _router: Router) { }

  verArtista(item){
    console.log(item);
    let artistaId;
    if(item.type === 'album') 
      artistaId = item.artists[0].id;
    else
      artistaId = item.id;
    console.log(artistaId);
    this._router.navigate(['/artist',artistaId]);
  }

  ngOnInit(): void {
  }

}
