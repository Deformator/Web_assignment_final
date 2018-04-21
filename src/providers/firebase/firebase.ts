// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database"
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
   
  }

  getShoppingItems() {
    return Promise.resolve(this.afd.list('admissionReq'));
  }

  getStartDate(){
    return Promise.resolve(this.afd.object('startDate'));
  }

  getClassesForSemester(semesterId: string){
    return Promise.resolve(this.afd.object('/semesters/' + semesterId + '/classes/'));
  }

  getClassByID(ent: string){
    return Promise.resolve(this.afd.object('/classes/' + ent))
  }

  getSemesters(){
    return Promise.resolve(this.afd.list('semesters'))
  }

  getFeedbacks(){
    return Promise.resolve(this.afd.list('feedback'))
  }

  addFeedback(feedback: Object){
    return Promise.resolve(this.afd.list('/feedback/').push(feedback))
  }

}
