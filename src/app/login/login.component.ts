import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    lastName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]]
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid)
      return;
  }

}
