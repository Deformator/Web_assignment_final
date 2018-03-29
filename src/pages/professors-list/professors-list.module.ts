import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorsListPage } from './professors-list';

@NgModule({
  declarations: [
    ProfessorsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorsListPage),
  ],
})
export class ProfessorsListPageModule {}
