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
  // tslint:disable-next-line:typedef
  proposerEmail() {
    const myEmail = 'korobototoussiyaya@gmail.com';
    this.myForm.setValue({
      username : myEmail,
      password: '',
    }) ;
    this.myForm.form.patchValue({
      username: 'korobototoussiyaya@gmail.com'
    }) ;
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
 /* onSubmit(form: HTMLFontElement) {
    console.dir(form);
  }*/
  // tslint:disable-next-line:typedef
  /*onSubmit(form: NgForm) {
    console.dir(form);
  }*/
  // tslint:disable-next-line:typedef
  onSubmit() {
    alert('email:' + this.myForm.value);
    console.log(this.myForm.value);
  }
}
