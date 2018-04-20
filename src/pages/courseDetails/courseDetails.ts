import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfessorsListPage } from '../professors-list/professors-list';
import { ClassDetailPage } from '../class-detail/class-detail';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Semester } from '../../models/semester';


@Component({
  selector: 'page-courseDetails',
  templateUrl: 'courseDetails.html'
})
export class CourseDetailsPage {

  outlineIsVisible = false;

  programOutline = [];

  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController) {
    this.initializeItems()

  }

  initializeItems() {

    this.fireProvider.getSemesters().then((response)=>{
      response.snapshotChanges().subscribe((semestersList)=>{
       semestersList.forEach(element => {
          let sem = new Semester()
          sem.title = element.payload.val().name
         
          this.fireProvider.getClassesForSemester(element.key).then((response) => {
            response.valueChanges().subscribe((lectures) => {
              let cKeys = Object.keys(lectures)
              for (let ent of cKeys) {
                this.fireProvider.getClassByID(ent).then((response) => {
                  response.snapshotChanges().subscribe(res => {
                   sem.classes.push({name: res.payload.val().name, id: res.key})
                    //  console.log(sem)
  
                  })
      
                })
              }
            })
      
          })
          this.programOutline.push(sem)
      })
    })
       });
        
    // console.log(this.programOutline)

  }

  goToProfessorsListPage() {
    this.navCtrl.push(ProfessorsListPage)
  }

  goToClassDetailPage(classDetails) {
    this.navCtrl.push(ClassDetailPage, {
      class: classDetails
    })
  }

}
