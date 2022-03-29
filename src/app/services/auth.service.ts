import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs";
import { ResponseLogin } from "../interfaces/interfaces";


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  public userEmail: string | null = '';
  public isAuthLogin: boolean = false;
  public userObj = {
    email: '',
    password: ''
  }

  public login(email: string, password: string): Observable<ResponseLogin> {

    const requestURL = '../../assets/users/users.json';

    return this.http.get<ResponseLogin>(requestURL).pipe(

      map((data: any) => {
        const usersList = data["users"];
        const user = usersList.find(
          ((usersElement: any) => {
            if (usersElement.email === email && usersElement.password === password) {
              this.userObj.email = usersElement.email
              this.userObj.password = usersElement.password

              localStorage.setItem('email', usersElement.email);

              this.isAuthLogin = true;
            }
            return this.userObj;
          })
        )

        return user;
      })
    );

  }

}


