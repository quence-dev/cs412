import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {wxConfig} from '../config/wxConfig';

@Injectable({
  providedIn: 'root'
})
export class WxService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(wxConfig.url + wxConfig.api_forecast + 'key=' + wxConfig.key + '&q=' + city,
      {observe: 'body', responseType: 'json'});
  }
}
