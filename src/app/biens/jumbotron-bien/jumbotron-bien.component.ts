import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-jumbotron-bien',
  templateUrl: './jumbotron-bien.component.html',
  styleUrls: ['./jumbotron-bien.component.css']
})
export class JumbotronBienComponent implements OnInit {

  constructor(private userService: UsersService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): any {
    this.authService.login('padjiby@exemple.com', 'passer');
  }

  logout(): any {
    this.authService.logout();
  }
}
