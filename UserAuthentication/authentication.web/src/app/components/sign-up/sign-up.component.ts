import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  resetForm(form: NgForm) {
    form.reset();
    this.user = new User();
  }

  submitForm(form: NgForm) {
    // this.user = new User();
    console.log('form: ', form);
    const userData = form.control.controls;
    this.user.firstName = userData.firstName.value;
    this.user.lastName = userData.lastName.value;
    this.user.email = userData.email.value;
    this.user.password = userData.password.value;
    this._userService.registerUser(this.user).subscribe(response => {
      if (response) {
        if (response === 'Success') {
          alert('Success');
        } else {
          alert('Error');
        }
      }
    });
  }
}
