import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // parentData, is the data sent from parent component, which is fetched by this component here.
  @Input() parentData;
  constructor() { }

  ngOnInit() {
  }

}
