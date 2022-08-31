import { Injectable } from '@angular/core';

export interface User {
  id: number ;
  nom: string ;
  prenom: string;
  role: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {id: 1, nom: 'NIANG', prenom: 'Papa', email: 'padjiby@exemple.com', password: 'passer', role: 'ADMIN'},
    {id: 2, nom: 'BA', prenom: 'seckou', email: 'seckou@exemple.com', password: 'passer', role: 'CLIENT'},
    {id: 3, nom: 'MBAYE', prenom: 'Mamadou', email: 'Mamadou@exemple.com', password: 'passer', role: 'CLIENT'},
  ];

  constructor() { }
  // @ts-ignore
  findUserById(id: number): User {
    const user = this.users.find(
    (u: User) => {
      return u.id === id;
  }
    ) ;
    return user;
  }
  getUserByEmailAndPass(email: string, pass: string): any {
    const user = this.users.find(
      (u: User) => {
        return u.email === email && u.password === pass;
      }
    ) ;
    return user;
  }
  }

