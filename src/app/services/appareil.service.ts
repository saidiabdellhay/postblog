import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils = [
    {
      id: 1,
      name :'machine à laver',
      status :'allumé'
    },
    {
      id: 2,
      name :'ordinateur',
      status :'allumé'
    },
    {
      id: 3,
      name :'télévision',
      status :'éteint'
    }
  ];

  constructor() { }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }
  
  switchOnAll() {
    for(let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
