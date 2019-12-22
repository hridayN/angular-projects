import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  imageUrl = 'https://picsum.photos/id/381/200/200';
  count = 0;
  name = '';
  @ViewChild('nameRef', { static: true}) nameElementRef: ElementRef;

  constructor() {
    // this.focus();
  }

  focus() {
    this.nameElementRef.nativeElement.focus();
  }

  incrementCount() {
    this.count += 1;
  }

  resetCount() {
    this.count = 0;
  }
}
