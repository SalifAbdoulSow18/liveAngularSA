import {Component, Input, OnInit} from '@angular/core';
import {OutilsService} from '../../../services/outils.service';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  // @ts-ignore
  @Input() bien: Bien;
  constructor(private outilsService: OutilsService) { }

  ngOnInit(): void {
  }
}
