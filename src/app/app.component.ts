import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import {passwordValidator} from './shared/password.validator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get un(){
    return this.registrationForm.get('userName');
  }

  get pw(){
    return this.registrationForm.get('password');
  }

  get em(){
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}')]],
    confirmPassword: ['', Validators.required],
    address: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    })
  }, {validator: passwordValidator});
 
  onSubmit(){
    console.warn(this.registrationForm.value);
  }


}
