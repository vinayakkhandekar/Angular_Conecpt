import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.create();
  }
  create()
  {
    this.myForm=new FormGroup(
      {
        'name':new FormControl(null,Validators.required),
        'email':new FormControl(null),
        'password':new FormControl(null),
        'arr':new FormArray(
          [(new FormControl())]
        )
      }
    )
  }
  showReactivedata()
  {
    console.log(this.myForm.value);
    
  }
  addSkill()
  {
    const element1= new FormControl();
    (<FormArray>this.myForm.get('arr')).push(element1)
  }

}
