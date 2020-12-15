import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {wxConfig} from '../config/wxConfig';

@Injectable({
  providedIn: 'root'
})
export class WxService {

  constructor(private http: HttpClient) { }

  getWeather(c: string): Observable<any> {
    return this.http.post<any>(wxConfig.url, {city: c}, {observe: 'body', responseType: 'json'});
  }

  get10Day(c: string): Observable<any> {
    return this.http.post<any>(wxConfig.extendedURL, {city: c}, {observe: 'body', responseType: 'json'});
  }

  getHourlyWeather(c: string): Observable<any> {
    return this.http.post<any>(wxConfig.hourlyURL, {city: c}, {observe: 'body', responseType: 'json'});
  }
}
