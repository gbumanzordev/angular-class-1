import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Person {
  id: number;
  name: string;
}

@Component({
  selector: 'app-loops-conditionals',
  templateUrl: './loops-conditionals.component.html',
  styleUrls: ['./loops-conditionals.component.css'],
})
export class LoopsConditionalsComponent implements OnInit {
  age = 3;
  animals = [];
  rvsp = 'no';
  people: Person[];
  constructor() {}

  ngOnInit(): void {
    this.people = [
      {
        id: 1,
        name: 'mary',
      },
      {
        id: 1,
        name: 'Peter',
      },
      {
        id: 1,
        name: 'Ana',
      },
      {
        id: 1,
        name: 'Matthew',
      },
      {
        id: 1,
        name: 'Andrew',
      },
    ];
  }

  trackById(index: number, person: Person) {
    return person.id;
  }
}
