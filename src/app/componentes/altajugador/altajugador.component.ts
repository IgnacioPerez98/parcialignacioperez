import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {JugadoresinfoService} from "../../services/jugadoresinfo.service";

@Component({
  selector: 'app-altajugador',
  templateUrl: './altajugador.component.html',
  styleUrls: ['./altajugador.component.css']
})
export class AltajugadorComponent {
    constructor(servjugadores:JugadoresinfoService, nav : Router) {
    }

    public DarDeAlta(){

    }

}
