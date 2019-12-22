import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() loggedIn: boolean;
  // @Output() greetings = new EventEmitter();
  // name = 'Hriday';
  message = '';
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this._commonService._message$.subscribe(message => {
      // if (message === 'Greetings child :)') {
      //   alert('Greetings parent :)');
      // } else {
      //   alert('Thank you parent :)');
      // }
      if (message !== '') {
        this.message = message;
      }
    });
  }

  // ngOnChanges(change: SimpleChanges) {
  //   const loginChange = change['loggedIn'];
  //   if (loginChange.currentValue === true) {
  //     this.message = 'Welcome back';
  //   } else {
  //     this.message = 'Please Login';
  //   }
  // }

  // greet(name: string) {
  //   alert('Hey ' + name);
  // }

  // greetParent() {
  //   this.greetings.emit(this.name);
  // }

  intimateParent() {
    this._commonService.sendMessage('Thank you parent');
  }
}
