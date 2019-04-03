import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  constructor(
    private httpClient: HttpClient
  ) { }

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
    this.emitAppareilSubject();
  }
  
  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }
  
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient
      .put('https://http-client-demo-718ba.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('enregistrement terminer ');
        },
        (error) => {
          console.log('erreur connexion firebase',error);
        }
      );
  }

  getAppareilFromServer() {
    this.httpClient
    .get<any[]>('https://http-client-demo-718ba.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('erreur de chargement', error);
      }
    );
  }

}
