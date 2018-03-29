import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  allFeedbacks = [
    {
      name: 'Sergey',
      description: 'I realy like this course',
      time: '2018/02/11 18:45'
    },
    {
      name: 'Anton',
      description: 'I thought there will be more info about Objective-C',
      time: '2018/02/09 12:45'
    },
    {
      name: 'Max',
      description: 'Perfect',
      time: '2018/02/09 10:10'
    },
    {
      name: 'Roger',
      description: 'The price is very cheap',
      time: '2018/01/11 09:05'
    },
    {
      name: 'Bas',
      description: 'Ive chosen this course as my 2nd program',
      time: '2018/01/10 23:03'
    },

  ]

  constructor(public navCtrl: NavController) {

  }

  sendFeedback(){
    
  }

}
