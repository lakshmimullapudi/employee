import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup,FormBuilder} from '@angular/forms';

function nam(){
  console.log('hi');
}

let a=document.getElementById('');

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
signupForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.signupForm= this.fb.group({
      firstName:['',[<any>Validators.required, <any>Validators.minLength(5)]],
   
   });
   

   console.log(this.signupForm);
  }

  onSubmit(val){
console.log(val);
  }

}
