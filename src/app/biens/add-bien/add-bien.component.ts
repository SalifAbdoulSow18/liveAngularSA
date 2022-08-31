import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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
    // @ts-ignore
    this.bienForm = new FormGroup({
      title: new FormControl(null,
        [Validators.required,
          Validators.minLength(5), Validators.maxLength(50)]),
      price: new FormControl(null,
        [Validators.required, Validators.min(1000)]),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null), // select
      image: new FormControl(null, Validators.required),
      sale: new FormControl('Location'), // radio
      imageSec: new FormArray([])
    });
    this.bienForm.patchValue({
      sale: 'vente'
    });
  }
  // validation function
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  getImageSecControls() {
    return (this.bienForm.get('imageSec') as FormArray).controls;
  }
  // tslint:disable-next-line:typedef
  onAddSecImage(){
    const control = new FormControl(null, Validators.required);
    (this.bienForm.get('imageSec') as FormArray).push(control);
  }

}
