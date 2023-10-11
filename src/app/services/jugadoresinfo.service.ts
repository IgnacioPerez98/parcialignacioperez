import { Injectable } from '@angular/core';
import {jugadores} from "../models/jugadores";

@Injectable({
  providedIn: 'root'
})
export class JugadoresinfoService {
   arqueros: jugadores[]=[
      new jugadores("Fernando Muslera", "Arquero", "./assets/Copia de descarga 1.jpeg")
   ]
   defensas: jugadores[]= [
    new jugadores("Jose Maria Gimenez", "Defensa", "./assets/Copia de descarga 3.jpeg"),
    new jugadores("Ronald Araujo", "Defensa", "./assets/Copia de descarga 4.jpeg")
   ]

  mediocampista: jugadores[] = [
    new jugadores("Federico Valverde", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
  ]
  delanteros : jugadores[] = [
    new jugadores("Edinson Cavani", "Delantero", "./assets/Copia de descarga 2.jpeg"),
  ]
   constructor() { }


  public CanAddPlayer():boolean{
     let suma = this.arqueros.concat(this.defensas).concat(this.mediocampista).concat(this.delanteros);
     return  suma.length != 23;
  }
  public  AddPlayer(player: jugadores){
     if(!this.CanAddPlayer()) {return false;}
     switch (player.posicion){
       case "Arquero":
        this.arqueros.push(player);
         break;
       case "Defensa":
          this.defensas.push(player);
         break;
       case "Mediocampistas":
          this.mediocampista.push(player);
         break;
       case "Delantero":
         this.delanteros.push(player);
         break;
     }
     return true;
  }

  public ValidateListIsCorrect():boolean{
     return this.arqueros.length > 0 && this.defensas.length> 0 && this.mediocampista.length > 0 && this.delanteros.length > 0;
  }
  public GetAllPlayerList():jugadores[]
  {
    return this.arqueros.concat(this.defensas).concat(this.mediocampista).concat(this.delanteros);
  }
}
