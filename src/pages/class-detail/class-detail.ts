import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-class-detail',
  templateUrl: 'class-detail.html',
})
export class ClassDetailPage {

  class = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.class = this.navParams.get('class')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassDetailPage');
  }

}
