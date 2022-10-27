import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalDirective } from './normal.directive';



@NgModule({
  declarations: [NormalDirective],
  imports: [
    CommonModule
  ],
  exports:[
    NormalDirective
  ]
})
export class DirectIveModule { }
