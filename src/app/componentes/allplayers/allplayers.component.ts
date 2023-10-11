import { Component } from '@angular/core';
import {JugadoresinfoService} from "../../services/jugadoresinfo.service";
import {Router} from "@angular/router";
import {jugadores} from "../../models/jugadores";

@Component({
  selector: 'app-allplayers',
  templateUrl: './allplayers.component.html',
  styleUrls: ['./allplayers.component.css']
})
export class AllplayersComponent {

  players: jugadores[] | null;
  constructor(servjugadores: JugadoresinfoService, private nav:Router) {
    this.players = servjugadores.GetAllPlayerList();
  }

  public ViewDetails( player :jugadores){
      this.nav.navigate(['/detalles',player])
  }
}
