import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';



const routes: Routes = [
{path:"",redirectTo:"templateForm",pathMatch:'full'},
{path:"templateForm", component:TemplateFormComponent} ,
{path:"reactiveForm",component:ReactiveFormComponent},
{path:"lazyLoad",loadChildren:"./lazy-load/lazy-load.module#LazyLoadModule"},
{path:"httpclient",component:HttpclientComponent},
{path:"data-binding",component:DataBindingComponent},
{path:"pipes",loadChildren:"./pipesmodule/pipesmodule.module#PipesmoduleModule"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
