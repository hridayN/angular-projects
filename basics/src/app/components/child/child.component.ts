import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // parentData, is the data sent from parent component, which is fetched by this component here.
  // @Input() is the decorator that tells, this property is of input type, fetched from some other component
  
  // @Input() usage 1
  // @Input() parentData;

  // @Input() usage 2
  @Input('parentData') name;

  // @Output() is a decorator that explains that this is an output property, emitted from here, will be fetched by some other component
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey parent compy');
  }
}
