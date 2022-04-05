import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() { }
  users() {
    return [
      { name: 'iqbal ahmed', age: 23, email: 'iqbalahmed9865@gmail.com' },
      { name: 'Nabin ahmed', age: 22, email: 'nabinahmed9865@gmail.com' },
      { name: 'Ruhul Amin', age: 23, email: 'ruhulamin9865@gmail.com' },
    ]
  }
}
