import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  admissionRequirements = [];

  programStartInfo: any;

  constructor(private fireProvider: FirebaseProvider, public navCtrl: NavController) {
    this.initializeItems()
  }


  initializeItems() {
    this.fireProvider.getShoppingItems().then((response) => {
      response.valueChanges().subscribe((list) => {
        this.admissionRequirements = list
      })
    })
    
    this.fireProvider.getStartDate().then((response) => {
      response.valueChanges().subscribe((date => {
        this.programStartInfo = date
      }))
    })
  }

}
