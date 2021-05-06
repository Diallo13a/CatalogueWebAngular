import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  // tslint:disable-next-line:ban-types
  public host: String = 'http://localhost:2080';

  constructor(private http: HttpClient) { }

  getAllCategories(): any{
    return this.http.get(this.host + '/categories');
  }

  getResource(url): any{
    return this.http.get(url);
  }
}
