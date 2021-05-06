import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // tslint:disable-next-line:ban-types
  public host2: String = 'http://localhost:2022';
  constructor(private http: HttpClient) { }

  login(data): any{
    return this.http.post(this.host2 + '/login', data, {observe: 'response'});
  }
}
