import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main2Component } from './main2/main2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { RouterModule, Routes } from '@angular/router';

const rt:Routes=[
  {path:"",component:Main2Component ,children:[
    {path:"child3" ,component:Child3Component},
    {path:"child4" ,component:Child4Component}
  ]}
]

@NgModule({
  declarations: [Main2Component, Child3Component, Child4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(rt)
  ]
})
export class LazyLoadModule {
  /**
   *
   */
  constructor() {
    console.log("Lazy-loading module");
    
    
  }
 }
