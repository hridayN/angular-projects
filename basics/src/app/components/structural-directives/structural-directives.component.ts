import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  display = false;
  name = 'Hriday';
  color = 'yellow';
  colors = [ 'red', 'blue', 'green', 'yellow' ];
  constructor() { }

  ngOnInit() {
  }

}
