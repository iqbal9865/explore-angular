import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'explore-angular';
  // users = ["habib", "Kabir", "Nixam", "Monu", "Mixin"];
  // data = 'Code Step By Step';
  // name = 'iqbal';
  // disable = false;
  // show = false;
  // getName () {
  //   console.warn('Function Called')
  // }
  // findName (name: string) {
  //   alert(name)
  // }
  // displayValue: string =  '';
  // anotherDisplayValue: string = '';
  // getData (data: string) {
  //   this.displayValue = data;
  // }
  // getAnotherData (data: string) {
  //   this.anotherDisplayValue = data;
  // }
  // count = 0;
  // counter (type: string) {
  //   if(type == 'sub') {
  //     this.count--;
  //   }
  //   else {
  //     this.count++;
  //   }
  // }
  userData: any = {}
  getData(data: NgForm) {
    console.log(data)
    this.userData = data;
  }
  show : boolean = false;
  toggleElement () {
    this.show = !this.show;
  }
}

