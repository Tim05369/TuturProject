import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Globals} from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "api/v1/admin/login";

  constructor(private http: HttpClient) {
  }

  login(login:string, password:string): Observable<string> {
      var HTTPOptions = {
          headers: new HttpHeaders({
              'Accept':'application/pdf'
          }),
          'responseType': 'blob' as 'json'
      }
    return this.http.post<string>(`${Globals.API_URL}/${this.apiUrl}`,
        {
          "id": 0,
          "login": login,
          "pwd": password,
          "token": "string"
        }, HTTPOptions
    )
  }

  checkIfLogged(jwt: string){
      return new Promise((resolve: any, reject: any) => {
          this.http.post<string>(`${Globals.API_URL}/${this.apiUrl}`,
              {
                  "id": 0,
                  "login": "",
                  "pwd": "",
                  "token": jwt
              }
          ).subscribe(data => {
            if(data == localStorage.getItem("jwt")) {
                resolve();
            }else{
                reject();
            }
          })
      })

  }
}
