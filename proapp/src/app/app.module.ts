import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EgerLoadModule } from './eger-load/eger-load.module';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveMModule } from './directive-m/directive-m.module';



@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HttpclientComponent,
    DataBindingComponent,
  
    
  ],
  imports: [
    BrowserModule,
   
    FormsModule,
    HttpClientModule,
    EgerLoadModule,
    ReactiveFormsModule,
    DirectiveMModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
