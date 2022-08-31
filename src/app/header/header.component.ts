import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search = '' ;
  @Output()
  searchElement = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchThis(): void {
    this.searchElement.emit(this.search);
  }

}
