import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  allFeedbacks = [];

  feedback = {
    name: '',
    body: '',
    time: ''
  }

  constructor(private datePipe: DatePipe, private fireProvider: FirebaseProvider, public navCtrl: NavController) {
    this.initializeItems()
  }

  initializeItems(){
    this.fireProvider.getFeedbacks().then((response)=>{
      response.valueChanges().subscribe((feedbacks)=>{
        feedbacks.reverse()
        console.log()
        this.allFeedbacks = feedbacks
      })
    })
  }

  sendFeedback(){
    let date = Date.now()
    let myFormattedDate = this.datePipe.transform(date, 'short')
    this.feedback.time = myFormattedDate
    this.fireProvider.addFeedback(this.feedback).then(()=>{
      this.feedback.name = '';
      this.feedback.body = '';
    })
  }

}
