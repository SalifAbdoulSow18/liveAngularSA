import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BiensService} from './biens/biens.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<Bien>{

  constructor(private  bienService: BiensService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bien> | Promise<Bien> | Bien {
    return this.bienService.getBienById(+route.params.id) ;
  }
}
