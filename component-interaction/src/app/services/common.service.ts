import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private _message = new Subject<string>();
  _message$ = this._message.asObservable();

  sendMessage(message: string) {
    this._message.next(message);
  }
}
