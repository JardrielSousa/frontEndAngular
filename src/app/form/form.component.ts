import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserServiceService} from 'src/app/service/user-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  obj:any;
  userCreated : User;
  feedbackEmail:boolean = false;
  feedbackPassword:boolean = false;
  feedbackNumber:boolean = false;
  feedbackConfirmPassword:boolean = false;
  profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    lastName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    email: ['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*"),Validators.minLength(8)]],
    password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(256)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(256)]],
    phone : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
    street:['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    zipcode:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]]
  });

  constructor(private fb: FormBuilder,
    private userService:UserServiceService,
    private router : Router
    ) { }
  ngOnInit(): void {
    this.feedbackEmail = false;
  }

  onSubmit() {
    this.profileForm.markAllAsTouched();
    if(this.profileForm.invalid || this.feedbackNumber || this.feedbackPassword || this.feedbackEmail || this.feedbackConfirmPassword)
      return;
    this.userService.create(this.profileForm.value)
      .subscribe(user=>{
        this.userCreated = user;
        this.userService.verMsg('usuário Criado!!!');
        this.router.navigate(['/login'])
      },error=>{
        this.userService.verMsg('Error ao criar usuário Criado!!!',true);
      })
  }

  get f(){
    return this.profileForm.controls
  }

  verifyEmail(email){
    if(email?.length>4 && email.includes("@")){
      this.feedbackEmail = false;
    }else{
      this.feedbackEmail = true;
    }
  }

  verifyPassword(password){
    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
    console.log(password);
    if(!regex.exec(password)){
      this.feedbackPassword = true;
    }else{
      this.feedbackPassword = false;
    }
  }

  verifyNumbers(number){
    var regexOnlyNumbers = new RegExp(/^[0-9.,]+$/);
    if(regexOnlyNumbers.exec(number)){
      this.feedbackNumber = false;
    }else{
      this.feedbackNumber = true;
      number.replace(/\//g,'');
    }
  }

  verifyPasswords(newPass,oldPass){
    if(newPass.length>7){
      if(newPass == oldPass){
        this.feedbackConfirmPassword = false;
      }else{
        this.feedbackConfirmPassword = true;
      }
    }
  }
}
