import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://axxyl.com/';

  constructor(private http: HttpClient) {}

  // Create
  registerDriver(data: any): Observable<any> {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    let API_URL = `${this.apiUrl}/pages/userregistration`;
    return this.http.post(API_URL, formData);
  }

  registerPassenger(data: any): Observable<any> {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    let API_URL = `${this.apiUrl}/pages/driverregistration`;
    return this.http.post(API_URL, data);
  }

  postContactUs(data: any): Observable<any> {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    let API_URL = `${this.apiUrl}/pages/ajexsendmail`;
    return this.http.post(API_URL, data);
  }
}
