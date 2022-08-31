import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  errorMessage = '' ;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.activedRoute.snapshot.data.message;
  }

}
