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
  // userData: any = {}
  // getData(data: NgForm) {
  //   console.log(data)
  //   this.userData = data;
  // }
  // show : boolean = false;
  // toggleElement () {
  //   this.show = !this.show;
  // }
  // tasklist:any[] = []
  // getTask (task:string) {
  //   this.tasklist.push({id: this.tasklist.length, name: task})
  //   console.log(this.tasklist)
  // }

  // tasklist : any[] = []
  // addTask (task:string) {
  //   this.tasklist.push({ id: this.tasklist.length, name : task })
  // }
  // deleteTask(id: any) {
  //   this.tasklist = this.tasklist.filter(task => task.id !== id)
  // }

  // currentItem = 'Television';

  // items = ['item1', 'item2', 'item3', 'item4'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }
  // formSubmitSuccess = '';
  // displayFailedSubmit = '';
  // onSubmit(data: any) {
  //   if(data.username && data.email) {
  //     if(data.username.length >= 5 && data.email.length >=8) {
  //       console.log(data)
  //       this.formSubmitSuccess = 'Form Submit Successfully';
  //       this.displayFailedSubmit = '';
  //     }
  //     else {
  //       console.log(data)
  //       this.formSubmitSuccess = '';
  //       this.displayFailedSubmit = "Minimum 5 char for name & 8 char for email";
  //     }
  //   }
  //   else {
  //     console.log(data)
  //     this.formSubmitSuccess = '';
  //     this.displayFailedSubmit = "All Field Must Be Fill Up";
  //   }
  // }
}
