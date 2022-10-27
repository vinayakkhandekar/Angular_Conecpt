import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private service:ServiceService,private rt:Router) { }
msg:string;
  ngOnInit() {
  }
  show(form:NgForm)
  {
    console.log(form.value);
    
  }
  adddata(uname,pass)
  {
//     const out=this.service.checkpassword(uname,pass)
      
//     if (out==true) {
//       this.rt.navigate(['/main1']);
//       return true;
//     }
//     else
//     {
// this.msg="Invalid input"
//       return false;
//     }

  }

}
