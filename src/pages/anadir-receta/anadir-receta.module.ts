import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnadirRecetaPage } from './anadir-receta';

@NgModule({
  declarations: [
    AnadirRecetaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnadirRecetaPage),
  ],
})
export class AnadirRecetaPageModule {}
