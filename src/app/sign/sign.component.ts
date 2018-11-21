import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signupForm: FormGroup;
  name: string;
  pass: string;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private log: LoginService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(val) {
    // this.name = val.value.firstName;
    // this.pass = val.value.password;
    this.log.logging(val);
    this.router.navigate(["dashbord"]);
  }

}
