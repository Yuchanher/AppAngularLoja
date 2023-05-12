export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Motorola',
    price: 799,
    description: 'Chacoalha que acende',
  },
  {
    id: 2,
    name: 'Iphone',
    price: 699,
    description: 'Piscou, acabou a bateria',
  },
  {
    id: 3,
    name: 'Xiaome',
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Sansung Galax',
    price: 99,
    description: 'caiu, quebrou, mais continua funcionando',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
