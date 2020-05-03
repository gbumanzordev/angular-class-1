import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interfaces/response.interface';

// export interface Person {
//   age: number;
//   name: string;
//   gender: string;
// }

// export type Fruta = 'Manzana' | 'Sandia' | 'Melon';

// export enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }

// export enum Response {
//   Yes = 1,
//   No
// }

// export class ResponseModel {
//   names: string[];
// }

@Component({
  selector: 'app-ts-class',
  templateUrl: './ts-class.component.html',
  styleUrls: ['./ts-class.component.css']
})
export class TsClassComponent implements OnInit {

  // person: Person;
  // fruta: Fruta;
  // direction: Direction;
  // response: Response;

  constructor() { }

  ngOnInit(): void {
    // this.person = {
    //   age: 23,
    //   name: 'Richard',
    //   gender: 'Male',
    // };
    // this.fruta = 'Manzana';
    // this.direction = Direction.Right;
    // this.response = Response.Yes;

    // const data: Response<Person[]> = {
    //   data: [],
    //   pagination: [2, 3, 4]
    // };
  }

}
