import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';



@IonicPage()
@Component({
  selector: 'page-class-detail',
  templateUrl: 'class-detail.html',
})
export class ClassDetailPage {

  class = {}
  id =''

  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('class')
    this.initializeItems()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassDetailPage');
  }

  initializeItems(){
    this.fireProvider.getClassByID(this.id).then((response)=>{
      response.valueChanges().subscribe((lecture)=>{
        this.class = lecture
      })
    })
  }

}
