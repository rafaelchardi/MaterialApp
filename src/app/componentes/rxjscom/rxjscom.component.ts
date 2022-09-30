import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, interval, mergeAll, fromEvent } from 'rxjs';
import { concatAll, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjscom',
  templateUrl: './rxjscom.component.html',
  styleUrls: ['./rxjscom.component.css']
})
export class RxjscomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick1(){
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    const observer :Observer<any> = {
      next: (x:Number) => console.log('Observer got a next value: ' + x),
      error: (err:any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    observable.subscribe(observer);

  }
  onClick2(){
    let li = 1;
    const clicks = of(1);
    const higherOrder = clicks.pipe(
      map(val => of(val + 10,val + 11,val + 11,val + 11,val + 11,val + 11,val + 11,val + 11,val + 11,val + 11,val + 11,val + 11)),
    );

    const firstOrder = higherOrder.pipe(
      tap(x=>{
         li=li+1;
         console.log(x)
        }),
      concatAll());
    firstOrder.subscribe(x => console.log(x));



  }
}
