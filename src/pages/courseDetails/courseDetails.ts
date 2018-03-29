import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfessorsListPage } from '../professors-list/professors-list'

@Component({
  selector: 'page-courseDetails',
  templateUrl: 'courseDetails.html'
})
export class CourseDetailsPage {

  outlineIsVisible = false;
  programOutline = [
    { 
    title: 'Semester 1',
    classes: [
    'Samsung Android Application Development',
    'Web Technologies for Mobile Platforms', 
    'Enterprise Technologies for Mobile Platforms',
    'iOS Development',
    'Mobile Application UI/UX Design'
  ]
  },
  { 
    title: 'Semester 2',
    classes: [
      'Samsung Advanced Android Development',
      'Mobile Web Development', 
      'Advanced iOS Development',
      'Emerging Technologies',
      'Mobile Application Development Project'
    ]
  }

  ]

  constructor(public navCtrl: NavController) {
    

  }

  goToProfessorsListPage(){
    this.navCtrl.push(ProfessorsListPage)
  }

  

}
