import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.sass']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve,reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils = [];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  onSave() {
    this.appareilService.saveAppareilToServer();
  }

  onFetsh() {
    this.appareilService.getAppareilFromServer();
  }

}
