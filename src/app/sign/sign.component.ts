import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
name:string;
pass:string;
  constructor(private fb: FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   this.signupForm= this.fb.group({
      firstName:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
   });
  }

onSubmit(val){
this.name =val.value.firstName;
this.pass =val.value.password;
this.router.navigate(["dashbord"]);
 }

}
