import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FeedbackPage } from '../pages/feedback/feedback';
import { CourseDetailsPage } from '../pages/courseDetails/courseDetails';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfessorsListPage } from '../pages/professors-list/professors-list';
import { ProfessorDetailPage } from '../pages/professor-detail/professor-detail';
import { ClassDetailPage } from '../pages/class-detail/class-detail';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../../config';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    FeedbackPage,
    CourseDetailsPage,
    HomePage,
    TabsPage,
    ProfessorsListPage,
    ProfessorDetailPage,
    ClassDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedbackPage,
    CourseDetailsPage,
    HomePage,
    TabsPage,
    ProfessorsListPage,
    ProfessorDetailPage,
    ClassDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    HttpClient
  ]
})
export class AppModule {}
