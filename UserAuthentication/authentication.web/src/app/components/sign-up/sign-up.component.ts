import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  constructor() { }

  ngOnInit() {
  }

  resetForm(form: NgForm) {
    form.reset();
    this.user = new User();
  }

  submitForm(form: NgForm) {
  }
}
