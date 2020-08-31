import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: any;

  constructor(private httpClient: HttpClient) {
    this.getData();
   }

  getData() {
    this.httpClient.get('http://www.mocky.io/v2/5ea172973100002d001eeada').subscribe(Response => {
      this.data = Response;
    });
  }

}
