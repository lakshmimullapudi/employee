import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  forgotForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]]
    });
  }

}
