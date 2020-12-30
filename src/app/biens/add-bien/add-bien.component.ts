import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.css']
})
export class AddBienComponent implements OnInit {
  bienForm: FormGroup;
  options: string[] = ['Location', 'vente'] ;

  constructor() { }

  ngOnInit(): void {
    // creating the form
    this.bienForm = new FormGroup({
      title: new FormControl(null),
      price: new FormControl(null),
      description: new FormControl(null),
      category: new FormControl(null), // select
      image: new FormControl(null),
      sale: new FormControl('Location'), // radio
    });
  }

}
