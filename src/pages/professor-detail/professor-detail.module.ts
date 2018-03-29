import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorDetailPage } from './professor-detail';

@NgModule({
  declarations: [
    ProfessorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfessorDetailPage),
  ],
})
export class ProfessorDetailPageModule {}
