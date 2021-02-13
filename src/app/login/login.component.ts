import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  feedbackLogin : boolean=false;
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]]
  });

  constructor(private fb: FormBuilder,
    private userService:UserServiceService,
    private router : Router) { }


  ngOnInit(): void {
    this.feedbackLogin = false;
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    this.userService.readBy(this.loginForm.value)
    .subscribe((resp:any)=>{
      this.verifyExistsUser(resp);
    })
  }

   verifyExistsUser(resp: any) {
    if (resp[0]?.id) {
      this.routerNavigation('home')
      this.setUserLocalStorage();
    } else {
      this.feedbackLogin = true;
    }
  }

  setUserLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.loginForm.value));
  }

  get f(){
    return this.loginForm.controls
  }

  routerNavigation(url){
    return this.router.navigate([url]);
  }
}
