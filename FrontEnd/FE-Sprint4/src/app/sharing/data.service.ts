import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private nameSource = new BehaviorSubject('default message');
  selectedMovie = this.nameSource.asObservable();

  private loginSource = new BehaviorSubject('Login');
  loginUser = this.loginSource.asObservable();


  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message)
  }
  getMessage(){
    return this.currentMessage;
  }

  selectMovie(message:string){
    this.nameSource.next(message)
  }
  getSelectedMovie(){
    return this.selectMovie;
  }
  
  setLogin(message:string){
    this.loginSource.next(message);
  }
  getLogin(){
    return this.loginUser;
  }

}
