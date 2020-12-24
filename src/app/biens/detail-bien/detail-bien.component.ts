import { Component, OnInit } from '@angular/core';
import {BiensService} from '../biens.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {
  bien: Bien;
  constructor(private biensService: BiensService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const idbien = this.route.snapshot.params.id;
    console.log(this.route) ;
    this.bien = this.biensService.getBienById(idbien) ;
    // for next time that this component will be loaded
    this.route.params
      .subscribe(
        (p: Params) => {
          const idBien = +p.id ;
          this.bien = this.biensService.getBienById(idBien) ;
        }
      ) ;
  }

}
