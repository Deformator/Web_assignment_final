import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-professor-detail',
  templateUrl: 'professor-detail.html',
})
export class ProfessorDetailPage {

professor = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.professor = this.navParams.get('professor')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorDetailPage');
  }

}
