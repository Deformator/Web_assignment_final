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
  professorsList = [
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
  }

  goToProfessorDetailPage(professorDetails){
    this.navCtrl.push(ProfessorDetailPage, {
      professor : professorDetails
    })
  }

}
