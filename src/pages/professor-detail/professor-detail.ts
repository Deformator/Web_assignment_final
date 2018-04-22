import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';



@IonicPage()
@Component({
  selector: 'page-professor-detail',
  templateUrl: 'professor-detail.html',
})
export class ProfessorDetailPage {

professor = {}

  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.professor = this.navParams.get('professor')
  }

  ionViewDidLoad() {
  
  }

}
