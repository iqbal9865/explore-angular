import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }
  users () {
    return this.http.get(this.url)
  }

  // users () {
  //   return [
  //     {name: 'iqbal ahmed', age: 23, email: 'iqbalahmed9865@gmail.com'},
  //     {name: 'Nabin ahmed', age: 22, email: 'nabinahmed9865@gmail.com'},
  //     {name: 'Ruhul Amin', age: 23, email: 'iqbalahmed9865@gmail.com'},
  //   ]
  // }
}
