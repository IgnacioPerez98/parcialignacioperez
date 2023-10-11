import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllplayersComponent} from "./componentes/allplayers/allplayers.component";
import {DetailedplayerComponent} from "./componentes/detailedplayer/detailedplayer.component";
import {AltajugadorComponent} from "./componentes/altajugador/altajugador.component";

const routes: Routes = [
  { path: 'home', component: AllplayersComponent },
  { path: 'detalles', component: DetailedplayerComponent},
  { path: 'altas', component: AltajugadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
