import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { DatePipe } from '@angular/common';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  private feedback : FormGroup;

  allFeedbacks = [];

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private fireProvider: FirebaseProvider, public navCtrl: NavController) {
    this.initializeItems()
    
  }

  initializeItems(){
    this.fireProvider.getFeedbacks().then((response)=>{
      response.valueChanges().subscribe((feedbacks)=>{
        feedbacks.reverse()
        this.allFeedbacks = feedbacks
      })
    })

    this.feedback = this.formBuilder.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
      time: ''
    });
  }

  sendFeedback(){
    let date = Date.now()
    let myFormattedDate = this.datePipe.transform(date, 'short')
    this.feedback.value.time = myFormattedDate
    this.fireProvider.addFeedback(this.feedback.value).then(()=>{
      this.feedback.reset()
    
    })
  }

}
