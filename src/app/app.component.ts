import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'explore-angular';
  data = 'Code Step By Step';
  getName () {
    console.warn('Function Called')
  }
  findName (name: string) {
    alert(name)
  }
}

