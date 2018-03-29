import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfessorsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorsListPage');
  }

}
