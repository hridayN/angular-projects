import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bindings',
  templateUrl: './style-bindings.component.html',
  styleUrls: ['./style-bindings.component.css']
})
export class StyleBindingsComponent implements OnInit {

  hasError = false;
  titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

}
