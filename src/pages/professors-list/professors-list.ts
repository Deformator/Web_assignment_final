import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessorDetailPage } from '../professor-detail/professor-detail';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-professors-list',
  templateUrl: 'professors-list.html',
})
export class ProfessorsListPage {

  searchIsVisible = false;
  searchQuery: string = '';
  professorsList = [];

  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }

  ionViewDidLoad() {

  }

  goToProfessorDetailPage(professorDetails) {
    this.navCtrl.push(ProfessorDetailPage, {
      professor: professorDetails
    })
  }

  initializeItems() {
    this.fireProvider.getProfessors().then((response) => {
      response.snapshotChanges().subscribe((professors) => {
        professors.forEach(professor => {
          let professorKey = professor.key;
          let professorName = professor.payload.val().name;
          let lectures = [];
          let imageSrc = '';
          let description = professor.payload.val().description;
          this.fireProvider.getClassesByProfessorId(professorKey, (classes) => {
            lectures = classes
          })
          this.fireProvider.getProfessorPhotoByProfessorId(professorKey, (photoSrc) => {
            imageSrc = photoSrc
            this.professorsList.push({
              name: professorName,
              img: imageSrc,
              class: lectures,
              description: description
            })
          })
        });
      })
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.professorsList = this.professorsList.filter((professor) => {
        return (professor.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
