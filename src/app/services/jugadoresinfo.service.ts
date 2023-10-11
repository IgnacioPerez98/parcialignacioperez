import { Injectable } from '@angular/core';
import {jugadores} from "../models/jugadores";

@Injectable({
  providedIn: 'root'
})
export class JugadoresinfoService {
  public GetImagenesDisponibles():string[]{
    let  img = [
      "./assets/Copia de descarga 1.jpeg",
      "./assets/Copia de descarga 2.jpeg",
      "./assets/Copia de descarga 3.jpeg",
      "./assets/Copia de descarga 4.jpeg",
      "./assets/Copia de descarga 5.jpeg",
      "./assets/Copia de descarga 6.jpeg",
      "./assets/Copia de descarga 7.jpeg",
      "./assets/Copia de descarga 8.jpeg",
      "./assets/Copia de descarga 9.jpeg",
      "./assets/Copia de descarga 10.jpeg",
      "./assets/Copia de descarga 11.jpeg",
      "./assets/Copia de descarga 12.jpeg",
      "./assets/Copia de descarga 13.jpeg",
      "./assets/Copia de descarga 14.jpeg",
      "./assets/Copia de descarga 15.jpeg",
      "./assets/Copia de descarga 16.jpeg",
      "./assets/Copia de descarga 17.jpeg",
      "./assets/Copia de descarga 18.jpeg",
      "./assets/Copia de descarga 19.jpeg",
      "./assets/Copia de descarga 20.jpeg",
      "./assets/Copia de descarga 21.jpeg",
      "./assets/Copia de descarga 22.jpeg",
      "./assets/Copia de descarga 23.jpeg"
    ]
    return img;
  }



  //2 elems
   arqueros: jugadores[]=[
      new jugadores("Fernando Muslera", "Arquero", "./assets/Copia de descarga 1.jpeg"),
      new jugadores("Fernando Muslera", "Arquero", "./assets/Copia de descarga 1.jpeg"),//debug
      new jugadores("Fernando Muslera", "Arquero", "./assets/Copia de descarga 1.jpeg"),//debug
   ]

  //7 elems
   defensas: jugadores[]= [
    new jugadores("Jose Maria Gimenez", "Defensa", "./assets/Copia de descarga 3.jpeg"),
    new jugadores("Ronald Araujo", "Defensa", "./assets/Copia de descarga 4.jpeg"),
    new jugadores("Martin Caceres", "Defensa", "./assets/Copia de descarga 4.jpeg"),
    new jugadores("Jose Rodriguez", "Defensa", "./assets/Copia de descarga 4.jpeg"),
    new jugadores("Martin Boselli", "Defensa", "./assets/Copia de descarga 4.jpeg"),
    new jugadores("Sebastian Coates", "Defensa", "./assets/Copia de descarga 4.jpeg"),
    new jugadores("Lucas Olaza", "Defensa", "./assets/Copia de descarga 4.jpeg"),
   ]

  //9 elems
  mediocampista: jugadores[] = [
    new jugadores("Federico Valverde", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Manuel Ugarte", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Rodrigo Bentacour", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Matias Vecino", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Mauro Arambarri", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Nicolas De La Cruz", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Facundo Torres", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Facundo Pellistri", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
    new jugadores("Giorgian De Arrascaeta", "Mediocampista", "./assets/Copia de descarga 5.jpeg"),
  ]
  //4 elems
  delanteros : jugadores[] = [
    new jugadores("Edinson Cavani", "Delantero", "./assets/Copia de descarga 2.jpeg"),
    new jugadores("Luis Suarez", "Delantero", "./assets/Copia de descarga 2.jpeg"),
    new jugadores("Darwin Nuñez", "Delantero", "./assets/Copia de descarga 2.jpeg"),
    new jugadores("Matias Arezo", "Delantero", "./assets/Copia de descarga 2.jpeg"),
  ]
  //suma 22 para optimizar el test de agregar .
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
