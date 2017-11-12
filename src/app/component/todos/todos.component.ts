import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
