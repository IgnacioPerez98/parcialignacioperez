import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {jugadores} from "../../models/jugadores";

@Component({
  selector: 'app-detailedplayer',
  templateUrl: './detailedplayer.component.html',
  styleUrls: ['./detailedplayer.component.css']
})
export class DetailedplayerComponent{
  player:jugadores;
  constructor(paramRecover: ActivatedRoute, private  nav: Router) {
    paramRecover.params.subscribe( dr => {
      this.player = dr as jugadores;
    })
  }
  public GoHome(){
    this.nav.navigate(['/home']);
  }
}
