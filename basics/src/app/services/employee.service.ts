import { Injectable } from '@angular/core';

// @Injectable is a decorator that signifies that this EmployeeService can have injected dependencies
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { 'id': 1, 'name': 'Hriday', 'age': 24 },
      { 'id': 2, 'name': 'Chirag', 'age': 23 },
      { 'id': 3, 'name': 'Fahad', 'age': 24 },
      { 'id': 4, 'name': 'Hitesh', 'age': 24 }
    ];
  }
}
