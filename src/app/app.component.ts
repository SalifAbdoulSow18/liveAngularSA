import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = '' ;

  chercher( data: string ): void{
    this.search = data;
    alert(data);
    console.log(this.search);
  }
}
