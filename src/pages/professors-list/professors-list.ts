import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessorDetailPage } from '../professor-detail/professor-detail'

@IonicPage()
@Component({
  selector: 'page-professors-list',
  templateUrl: 'professors-list.html',
})
export class ProfessorsListPage {

  searchIsVisible = false;
  searchQuery: string = '';
  professorsList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }

  ionViewDidLoad() {
  
  }

  goToProfessorDetailPage(professorDetails){
    this.navCtrl.push(ProfessorDetailPage, {
      professor : professorDetails
    })
  }

  initializeItems() {
   this.professorsList = [
    {
      name: 'Przemyslaw Pawluk',
      img: 'assets/imgs/logo.png',
      class: 'Web Development'

    },
    {
      name: 'Tom',
      img: 'assets/imgs/logo.png',
      class: 'IOS Development'
      
    },
    {
      name: 'Viktor Zaytsev',
      img: 'assets/imgs/logo.png',
      class: 'Android Development'
      
    }
  ];
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
