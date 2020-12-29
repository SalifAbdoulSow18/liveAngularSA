import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListBienComponent} from '../../biens/list-bien/list-bien.component';
import {AddBienComponent} from '../../biens/add-bien/add-bien.component';
import {DetailBienComponent} from '../../biens/detail-bien/detail-bien.component';
import {ReservationsBienComponent} from '../../biens/reservations-bien/reservations-bien.component';
import {DetailReservationsComponent} from '../../biens/reservations-bien/detail-reservations/detail-reservations.component';
import {EditReservationsComponent} from '../../biens/reservations-bien/edit-reservations/edit-reservations.component';
import {PageNotFoundComponent} from '../../page-not-found/page-not-found.component';
import {AuthGuardService} from '../../auth-guard.service';
import {JumbotronBienComponent} from '../../biens/jumbotron-bien/jumbotron-bien.component';
import {ErrorsComponent} from '../../errors/errors.component';
import {BienResolverService} from '../../bien-resolver.service';
import {ConnexionComponent} from '../../connexion/connexion.component';

// @ts-ignore
// @ts-ignore
const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent, resolve:{bien: BienResolverService} },
  { path: 'jumbotron', component: JumbotronBienComponent },
  { path: 'login', component: ConnexionComponent },

  { path: 'reservations',
    /*canActivate: [AuthGuardService],*/
    canActivateChild: [AuthGuardService],
    component: ReservationsBienComponent , children : [
      { path: ':id', component: DetailReservationsComponent },
      { path: ':id/edit', component: EditReservationsComponent },
    ]
  },
  // Can Activate Guard
  /*{ path: 'not-found', component: PageNotFoundComponent },*/
  { path: 'not-found', component: ErrorsComponent, data: {message: 'page introuvable!'} },
  { path: '**', redirectTo: '/not-found' },
   // Route GUARD
] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
