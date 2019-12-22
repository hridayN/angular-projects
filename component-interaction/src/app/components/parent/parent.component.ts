import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // userLoggedInState: boolean;
  // @ViewChild(ChildComponent, {static: true}) childComponent: ChildComponent;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this._commonService._message$.subscribe(message => {
      alert('Child says: ' + message);
    });
  }
  // login() {
  //   this.userLoggedInState = true;
  // }

  // logout() {
  //   this.userLoggedInState = false;
  // }

  // greet() {
  //   this.childComponent.greet(this.childComponent.name);
  // }

  // greetingsFromChild(name: string) {
  //   alert('greetings from Child, Hello ' + name);
  // }

  greetChild() {
    this._commonService.sendMessage('Greetings child :)');
  }

  appreciateChild() {
    this._commonService.sendMessage('Well done child :)');
  }
}
