import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  @ViewChild('loginForm') myForm: NgForm ;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
 /* onSubmit(form: HTMLFontElement) {
    console.dir(form);
  }*/
  // tslint:disable-next-line:typedef
  /*onSubmit(form: NgForm) {
    console.dir(form);
  }*/
  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    console.log(this.myForm);
  }
}
