import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  //templateUrl: './child1.component.html',

  template: `<li *ngFor = "let data of userInput">
  {{data.id}} {{data.name}}
</li> `,
  styles: []
})
export class Child1Component implements OnInit {
  @Input() userInput: any;

  constructor() { }

  ngOnInit() {
  }

}
