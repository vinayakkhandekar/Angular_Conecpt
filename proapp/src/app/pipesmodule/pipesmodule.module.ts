import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Main4Component } from './main4/main4.component';
import { Child6Component } from './child6/child6.component';
import { Child5Component } from './child5/child5.component';

const routing:Routes=[
  {path:"",component:Main4Component,children:[
    {path:"child5",component:Child5Component},
    {path:"child6",component:Child6Component}
  ]}
]

@NgModule({
  declarations: [
    Main4Component,
    Child6Component,
    Child5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class PipesmoduleModule {
  /**
   *
   */
  constructor() {
    console.log("Pipes module called");
    
    
  }
 }
