import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main1Component } from './main1/main1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectIveModule } from '../direct-ive/direct-ive.module';

const routes:Routes=[
  {path:"main1" ,component:Main1Component ,children:[
    {path:"child1",component:Child1Component},
    {path:"child2", component:Child2Component}
  ]}
]

@NgModule({
  declarations: [Main1Component, Child1Component, Child2Component],
  imports: [
    CommonModule,
    DirectIveModule,
    RouterModule.forChild(routes)
  ]
})
export class EgerLoadModule { 
  /**
   *
   */
  constructor() {
    console.log("Eger Loading");
    
  }
}
