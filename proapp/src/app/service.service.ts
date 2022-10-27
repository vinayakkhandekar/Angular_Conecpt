import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devApi } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  createpost():Observable<any>
  {
    return this.http.get(`${devApi}albums`);
  }

  checkpassword(uname:string,password:string)
  {
    if (uname=="admin" && password=="admin123") {
      localStorage.setItem('user1','admin');
      return true;
      
    }
    else
    {
      return false
    }
  }
}
