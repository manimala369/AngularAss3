import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData=[
    {"id": 1, "name" : "manimala"},
    {"id": 2, "name" : "vedu"},
    {"id": 3, "name" : "ganta"},
  ];

  data(user:any){
    alert('details are : name is  ${user.name}, and place is ${user.place}');
  }
  title = 'This is the example of an parent and child communication';
}
