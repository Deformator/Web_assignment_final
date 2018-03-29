import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 admissionRequirements =['A **post-secondary diploma** or degree in computer science or computer programming',
                          'Proof of English proficiency',
                          'Application deadline: **May**'];

  programStartInfo = "Fall 2018";

  constructor(public navCtrl: NavController) {

  }

}
