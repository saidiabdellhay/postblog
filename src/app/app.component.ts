import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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

  appareils = [
    {
      name :'machine à laver',
      status :'allumé'
    },
    {
      name :'ordinateur',
      status :'allumé'
    },
    {
      name :'télévision',
      status :'éteint'
    }
  ];
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }

  onAllumer(){
    console.log('looo');
  }
}
