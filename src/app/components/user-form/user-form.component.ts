import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  registerForm : FormGroup;
  submitted : boolean = false;
  

  

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required, Validators.minLength(6)]

      
    });
  }
  
  // convenience getter for easy access to form fields

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

     if (this.registerForm.invalid){
       return;
     }

     alert('Success')

  }

}
