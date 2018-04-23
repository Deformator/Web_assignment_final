// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database"
import { AngularFireStorage } from 'angularfire2/storage';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afs: AngularFireStorage, public afd: AngularFireDatabase) {
   
  }

  getAdmissionReq() {
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

  getImage(imageName: string){
    return Promise.resolve(this.afs.ref(imageName))
  }

  getProfessorPhotoByProfessorId(professorId: string, clb){
     Promise.resolve(this.afd.object('/professors/' + professorId)).then((response)=>{
      response.valueChanges().subscribe((professorObj)=>{
        var object: any = professorObj
        Promise.resolve(this.getImage(object.photo)).then((image)=>{
          image.getDownloadURL().subscribe(url=>{
            clb(url)
          })
        })
      })
    })
  }

  getProfessors(){
    return Promise.resolve(this.afd.list('professors'))
  }

  getClassesByProfessorId(professorID: string, clb){ 
    Promise.resolve(this.afd.list('/classes/')).then((response)=>{
      response.valueChanges().subscribe((classes)=>{
        let classesArr = [];
        classes.forEach((lecture) => {
          var object: any = lecture
         if(object.professor === professorID){
          classesArr.push(object.name)
         }
        });
        clb(classesArr) 
      })
    })
  }

  getProfessorByClassId(classId: string, clb){
    Promise.resolve(this.afd.object('/classes/' + classId)).then((response)=>{
      response.valueChanges().subscribe((lecture)=>{
        var object: any = lecture
        Promise.resolve(this.afd.object('/professors/' + object.professor)).then((response2)=>{
          response2.snapshotChanges().subscribe((professor)=>{
            clb(professor)
          })
        })
      })
    })
  }

}
