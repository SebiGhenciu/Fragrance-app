import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserDAO } from '../../models/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser!: UserDAO;
  userCookieKey = 'loggedUsed'
  baseUrl = 'https://localhost:7028';
  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    if (this.getUserFromCookies()) {
      this.loggedUser = this.getUserFromCookies();
    }
  }

  login(username: string, password: string) {
    let url = this.baseUrl + `/User?username=${username}&password=${password}`;
    this.httpClient.get<UserDAO>(url).subscribe((user) => {
      if (user) {
        this.loggedUser = user;
        this.setUser(user);
      }
    });


  }

  register(user: User) {
    let body = {
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role
    }
    let url = this.baseUrl + `/User`;
    console.log(url)
    this.httpClient.post<any>(url, body).subscribe();

  }

  setUser(user: UserDAO) {
    const jsonString = JSON.stringify(user);
    this.cookieService.set(this.userCookieKey, jsonString);
  }

  cookieExists(key: string): boolean {
    return this.cookieService.check(key);
  }

  getUserFromCookies(): any {
    if (this.cookieExists(this.userCookieKey)) {
      const jsonString = this.cookieService.get(this.userCookieKey);
      return JSON.parse(jsonString);
    }
    return undefined;
  }

  isLoginExpired(): boolean {
    if (this.loggedUser == null) {
      return true;
    }
    const timestamp = Number(this.loggedUser.loginTimeStamp);
    if (timestamp !== null) {
      const currentTime = new Date().getTime();
      return currentTime > timestamp;
    }
    return true;
  }

}
