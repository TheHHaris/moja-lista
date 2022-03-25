import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { PjesmaComponent } from './pjesma/pjesma.component';
import { PokaziPjesmuComponent } from './pjesma/pokazi-pjesmu/pokazi-pjesmu.component';
import { DodajUrediPjesmuComponent } from './pjesma/dodaj-uredi-pjesmu/dodaj-uredi-pjesmu.component';
import { PlaylistApiService } from './playlist-api.service';
import { DodajKategorijuComponent } from './pjesma/dodaj-kategoriju/dodaj-kategoriju.component';

@NgModule({
  declarations: [
    AppComponent,
    PjesmaComponent,
    PokaziPjesmuComponent,
    DodajUrediPjesmuComponent,
    DodajKategorijuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlaylistApiService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
