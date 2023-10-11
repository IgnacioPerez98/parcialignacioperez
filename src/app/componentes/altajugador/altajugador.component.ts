import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {JugadoresinfoService} from "../../services/jugadoresinfo.service";
import {NgForm} from "@angular/forms";
import {jugadores} from "../../models/jugadores";

@Component({
  selector: 'app-altajugador',
  templateUrl: './altajugador.component.html',
  styleUrls: ['./altajugador.component.css']
})
export class AltajugadorComponent {
    pathsFotos: string[];
    constructor( private servjugadores:JugadoresinfoService, private nav : Router) {
      this.pathsFotos = servjugadores.GetImagenesDisponibles();
    }
    pathSelectedFoto : string;
    isOk :boolean = true;
    public DarDeAlta(form: NgForm){
        let nombre = form.value.name;
        let posicion = form.value.position;
        if(this.servjugadores.CanAddPlayer()){
          let foto = this.pathSelectedFoto == undefined? this.pathsFotos[0]: this.pathSelectedFoto;
           this.servjugadores.AddPlayer(new jugadores(nombre,posicion,foto));
           this.nav.navigate(['/home'])
        }else {
          this.isOk = false;
        }

    }

    public TryAgain(){
      this.isOk = true;
    }
    public MarcarSelected(el :string){
      this.pathSelectedFoto = el;
    }

}
