import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };
  constructor() { }

  ngOnInit() {
  }

}
