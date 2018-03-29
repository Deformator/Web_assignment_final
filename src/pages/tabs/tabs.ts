import { Component } from '@angular/core';

import { FeedbackPage } from '../feedback/feedback';
import { CourseDetailsPage } from '../courseDetails/courseDetails';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CourseDetailsPage;
  tab3Root = FeedbackPage;

  constructor() {

  }
}
