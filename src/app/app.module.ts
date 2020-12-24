import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { EnvDataPipe } from './pipes/env-data.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ReservationsBienComponent } from './biens/reservations-bien/reservations-bien.component';
import { DetailReservationsComponent } from './biens/reservations-bien/detail-reservations/detail-reservations.component';
import { EditReservationsComponent } from './biens/reservations-bien/edit-reservations/edit-reservations.component';
import {RoutingModule} from './app/routing/routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    JumbotronBienComponent,
    SeparatorPipe,
    EnvDataPipe,
    SummarizePipe,
    FilterPipe,
    ReservationsBienComponent,
    DetailReservationsComponent,
    EditReservationsComponent,
    PageNotFoundComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
      RoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
