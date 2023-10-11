import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedplayerComponent } from './componentes/detailedplayer/detailedplayer.component';
import { AllplayersComponent } from './componentes/allplayers/allplayers.component';
import { AltajugadorComponent } from './componentes/altajugador/altajugador.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailedplayerComponent,
    AllplayersComponent,
    AltajugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
