import {Component, Input, OnInit} from '@angular/core';
import {BiensService} from '../biens.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

  @Input() search = '';
  // @ts-ignore
  biens: Bien[];
  constructor(private  biensService: BiensService) { }

  ngOnInit(): void {
    this.biens = this.biensService.getAllBiens() ;
  }
}
