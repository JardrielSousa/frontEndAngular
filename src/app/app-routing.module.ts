import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { Error404ComponentComponent } from './error404-component/error404-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component:HomeComponent },
  { path: 'register', component: FormComponent },
  { path: '**', component: Error404ComponentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
