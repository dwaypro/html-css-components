import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class DummyDataService {

  constructor(private http: HttpClient) { }
  private url = "https://jsonplaceholder.typicode.com/posts?userId=1";

  getDummyData(): Observable<any>{
    return this.http.get(this.url)
  }
}
