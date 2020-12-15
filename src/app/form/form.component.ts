import { Component, OnInit } from '@angular/core';
import {City, Hour, Day} from '../data/City';
import {WxService} from '../services/wx.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  city: string;
  today: boolean;
  hourly: boolean;
  extended: boolean;
  cached: boolean;
  // selectedCity: City;
  weather: any;
  hours: any;
  days: any;
  constructor(private wxService: WxService) { }

  ngOnInit(): void { }

  getWeather(): void {
    console.log(`getWeather called.`);
    this.today = true;
    this.hourly = false;
    this.extended = false;
    this.wxService.getWeather(this.city).subscribe(
      response => {
        console.log(`Response: ${response}`);
        this.weather = response.weather;
        this.cached = response.cached;
        // this.selectedCity.name = response.weather.location.name;
        // this.selectedCity.country = response.weather.location.country;
        // this.selectedCity.condition = response.weather.current.condition.text;
        // this.selectedCity.tempF = response.weather.current.temp_f;
      }
    );
  }

  getHourlyWeather(): void {
    console.log(`getHourlyWeather called.`);
    this.today = false;
    this.hourly = true;
    this.extended = false;
    this.wxService.getHourlyWeather(this.city).subscribe(
      response => {
        console.log(`Response: ${response}`);
        this.weather = response.weather;
        this.cached = response.cached;
        this.hours = response.weather.forecast.forecastday[0].hour;
        // this.selectedCity.name = response.weather.location.name;
        // this.selectedCity.country = response.weather.location.country;
        // this.selectedCity.condition = response.weather.current.condition.text;
        // this.selectedCity.tempF = response.weather.current.temp_f;
      }
    );
  }

  get10Day(): void {
    console.log(`get10Day called.`);
    this.today = false;
    this.hourly = false;
    this.extended = true;
    this.wxService.get10Day(this.city).subscribe(
      response => {
        console.log(`Response: ${response}`);
        this.weather = response.weather;
        this.cached = response.cached;
        this.days = response.weather.forecast.forecastday;
        // this.selectedCity.name = response.location.name;
        // this.selectedCity.country = response.location.country;
        // this.selectedCity.condition = response.current.condition.text;
        // this.selectedCity.tempF = response.current.temp_f;
      }
    );
  }
}
