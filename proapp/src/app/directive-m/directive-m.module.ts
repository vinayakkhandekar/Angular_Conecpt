import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main3Component } from './main3/main3.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectIveModule } from '../direct-ive/direct-ive.module';

const or:Routes=[
  {path:"directive",component:Main3Component}
]

@NgModule({
  declarations: [Main3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(or),
    DirectIveModule

  ]
})
export class DirectiveMModule { }
