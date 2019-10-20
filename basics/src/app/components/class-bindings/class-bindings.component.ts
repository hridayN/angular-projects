import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bindings',
  templateUrl: './class-bindings.component.html',
  styleUrls: ['./class-bindings.component.css']
})
export class ClassBindingsComponent implements OnInit {

  textSuccess = 'text-success';
  textDanger = 'text-error';
  hasError = false;
  isSpecial = true;
  messagesClass = {
    'text-success': !this.hasError,
    'text-error': this.hasError,
    'text-special': this.isSpecial
  };
  constructor() { }

  ngOnInit() {
  }

}
