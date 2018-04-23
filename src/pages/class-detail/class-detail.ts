import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { ProfessorDetailPage } from '../professor-detail/professor-detail';



@IonicPage()
@Component({
  selector: 'page-class-detail',
  templateUrl: 'class-detail.html',
})
export class ClassDetailPage {

  class = {};
  professor = {};
  id ='';


  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('class')
    this.initializeItems()
  }

  ionViewDidLoad() {

  }

  initializeItems(){
    this.fireProvider.getClassByID(this.id).then((response)=>{
      response.valueChanges().subscribe((lecture)=>{
        this.class = lecture
      })
    })

    this.fireProvider.getProfessorByClassId(this.id, (professorObj)=>{
      this.fireProvider.getProfessorPhotoByProfessorId(professorObj.key, (photoSrc)=>{
        this.fireProvider.getClassesByProfessorId(professorObj.key, (lectures)=>{
          this.professor = {
            name: professorObj.payload.val().name,
            img: photoSrc,
            description: professorObj.payload.val().description,
            class: lectures
          }
        })
       
      })     
    })
  }

  goToProfessorDetailPage(){
    this.navCtrl.push(ProfessorDetailPage, {
      professor: this.professor
    })
  }

}
