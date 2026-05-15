import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class App {
  // isDisabled = true;
  // comments: string[] = [];

  myObservable: any;
  myPromise: any; // Promises are always asynchronous.
  mySubscription: any;
  /*
  submit(comment: string) {
    this.comments.push(comment);
  }
  */

  create() {
    this.myObservable = new Observable<string>(observer => {
      // console.log('Observable created');
      // observer.next('Observable has emitted 1');
      // observer.next('Observable has emitted 2');
      // observer.next('Observable has emitted 3');
      /*
      setInterval(() => {
        observer.next('Observable is emitting data');
      }, 1000);
      */

      setInterval(() => {
        observer.next('Observable is emitting data');
      }, 1000);
    });

    this.myPromise = new Promise<string>((resolve) => {
      // console.log('Promise created');
      // resolve('Promise has resolved 1');
      // resolve('Promise has resolved 2');
      // resolve('Promise has resolved 3');
      setInterval(() => {
        resolve('Promise has resolved');
      }, 1000);
    });

    // this.execute();
    this.myPromise.then((data: any) => {
      console.log(data);
    });

    this.myObservable.subscribe((data: any) => {
      console.log(data);
    });
  }

  execute() {
    this.mySubscription = this.myObservable.subscribe((data: any) => {
      console.log(data);
    });

    this.myPromise.then((data: any) => {
      console.log(data);
    });
  }

  cancel() {
    this.mySubscription.unsubscribe();
  }
}
