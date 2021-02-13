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
  profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    lastName: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    phone : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
    street:['',[Validators.required,Validators.minLength(4),Validators.maxLength(256)]],
    zipcode:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]]
  });

  constructor(private fb: FormBuilder,
    private userService:UserServiceService,
    private router : Router
    ) { }
  ngOnInit(): void {

  }

  onSubmit() {
    this.profileForm.markAllAsTouched();
    if(this.profileForm.invalid)
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

}
