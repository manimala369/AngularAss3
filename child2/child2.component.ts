import { Component, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child2',
  template: `<button (click) = "display()">Click</button>`,
  styles: []
})
export class Child2Component implements OnInit {
  @Output() eventEmitter= new EventEmitter();

  //name:string="manimala";
  user={
    "name": "manimala", "place": "bhimavaram"
  }

  constructor() { }

  ngOnInit() {
  }

  display(){
    this.eventEmitter.emit(this.user);
  }
}
