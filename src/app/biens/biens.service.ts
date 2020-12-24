import { Injectable } from '@angular/core';
// @ts-ignore
import { Bien } from './list-bien/bien.model';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  // @ts-ignore
  private biens: Bien[] = [
    {
      id: 1,
      title: 'Voiture',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugit laboriosam maxime nemo neque quod similique. Accusantium autem corporis, eaque est fuga id magnam minima praesentium quasi, quo repellat.',
      image: 'https://source.unsplash.com/1080x720/?car',
      state: 1,
      price: 100000000,
      category: 'Automobile',
      sale: true,
      createAt: new Date(2000, 10, 18, 15, 10, 50)
    },
    {
      id: 2,
      title: 'Computer',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugit laboriosam maxime nemo neque quod similique. Accusantium autem corporis, eaque est fuga id magnam minima praesentium quasi, quo repellat.',
      image: 'https://source.unsplash.com/1080x720/?computer',
      state: 5,
      price: 250000,
      category: 'TECH',
      sale: true,
      createAt: new Date(2000, 10, 18, 8, 10, 50)
    },
    {
      id: 3,
      title: 'Clavier',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugit laboriosam maxime nemo neque quod similique. Accusantium autem corporis, eaque est fuga id magnam minima praesentium quasi, quo repellat.',
      image: 'https://source.unsplash.com/1080x720/?clavier',
      state: 6,
      price: 2000,
      category: 'category1',
      sale: true,
      createAt: new Date(2000, 10, 18, 11, 10, 50)
    },
    {
      id: 4,
      title: 'Roman',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugit laboriosam maxime nemo neque quod similique. Accusantium autem corporis, eaque est fuga id magnam minima praesentium quasi, quo repellat.',
      image: 'https://source.unsplash.com/1080x720/?book',
      state: 67,
      category: 'Education',
      price: 15000,
      sale: true,
      createAt: new Date(2000, 10, 18, 22, 10, 50)
    },
    {
      id: 5,
      title: 'Bus',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugit laboriosam maxime nemo neque quod similique. Accusantium autem corporis, eaque est fuga id magnam minima praesentium quasi, quo repellat.',
      image: 'https://source.unsplash.com/1080x720/?transport',
      state: 4,
      category: 'transport',
      price: 15500000,
      sale: true,
      createAt: new Date(2000, 10, 18, 20, 10, 50)
    },
    {
      id: 6,
      title: 'Football',
      description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugit laboriosam maxime nemo neque quod similique. Accusantium autem corporis, eaque est fuga id magnam minima praesentium quasi, quo repellat.',
      image: 'https://source.unsplash.com/1080x720/?footfall',
      state: 1,
      category: 'sport',
      price: 200000,
      sale: true,
      createAt: new Date(2000, 10, 18, 21, 10, 50)
    },
  ] ;

  constructor() { }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  getAllBiens(): Bien[]{
    return this.biens;
  }


  /**
   * Permet de rechercher un bien par son ID
   *
   */
  getBienById(id: number): Bien{
    /*const bienFound = this.biens.find(
      (b: Bien) => {
        return b.id === id ;
      }
    ) ;*/

    for (const bien of this.biens) {
      if (bien.id == id ) {
        return bien;
      }
    }
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  addBien(newBien: Bien) {
    this.biens.push(newBien) ;
  }

  // tslint:disable-next-line:typedef
  updateBien(bienUpdated: Bien){
    var oldBien = this.biens.find(
      (b: Bien) => {
        return b.id === bienUpdated.id ;
      }
    ) ;
    if (oldBien){
      oldBien = {...bienUpdated} ;
    }
  }

  getLastId(): number{
    return this.biens[this.biens.length - 1] ? this.biens[this.biens.length - 1].id : 0 ;
  }
}
