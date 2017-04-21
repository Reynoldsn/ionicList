import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Intro } from './intro';

@NgModule({
  declarations: [
    Intro,
  ],
  // imports: [
  //   IonicModule.forChild(Intro),
  // ],
  exports: [
    Intro
  ]
})
export class IntroModule {}
