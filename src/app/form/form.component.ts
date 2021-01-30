import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
    firstName: ['',[Validators.required,Validators.minLength(4)]],
    lastName: ['',[Validators.required,Validators.minLength(4)]],
    phone : ['',Validators.required],
    street:['',Validators.required],
    zipcode:['',Validators.required]
  });

  constructor(private fb: FormBuilder,private userService:UserServiceService) { }
  ngOnInit(): void {

  }

  onSubmit() {
      this.userService.create(this.profileForm.value)
      .subscribe(user=>{
        this.userCreated = user;
      });
  }


}
