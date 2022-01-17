import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appointment';

  headers = ["ID","Name"]

  rows = [
    {
      "ID":"1",
      "Name":"Ruthvik"
    },
    
    {
      "ID":"2",
      "Name":"Zoro"
    },
    
    {
      "ID":"3",
      "Name":"Luffy"
    },
    
    {
      "ID":"4",
      "Name":"Sanji"
    }
  ]
}
