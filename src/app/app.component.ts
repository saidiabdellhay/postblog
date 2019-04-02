import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  
  secondes: number;
  counterSubscription: Subscription; 

  constructor() { }

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('error counter');
      },
      () => {
        console.log('observable complete ! ');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
