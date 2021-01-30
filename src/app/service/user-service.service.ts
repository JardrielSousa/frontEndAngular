import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from './../../environments/environment';
import {User} from 'src/app/model/user'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = `${environment.url}user`

  create(user:User):Observable<User>{
    console.log(user);
    return this.http.post<User>(this.baseUrl,user)
  }
  read():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

}
