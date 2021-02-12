import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {environment} from './../../environments/environment';
import {User} from 'src/app/model/user'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient,
    private snackBar:MatSnackBar) { }

  baseUrl = `${environment.url}user`

  verMsg(msg:string,isError:boolean=false):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msgError'] : ['msgSucess']
    })

  }

  create(user:User):Observable<User>{
    console.log(user);
    return this.http.post<User>(this.baseUrl,user)
  }
  read():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

}
