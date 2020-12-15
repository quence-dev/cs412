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
  weather: any;
  hours: any;
  days: any;
  selectedOption: any = 'today';
  constructor(private wxService: WxService) { }

  ngOnInit(): void { }

  sendRequest(): void {
    if (this.selectedOption === 'today') {
      this.getWeather();
    }
    if (this.selectedOption === 'hourly') {
      this.getHourlyWeather();
    }
    if (this.selectedOption === 'extended') {
      this.get10Day();
    }
  }

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
      }
    );
  }

  radioChanged(event: any): void {
    this.selectedOption = event.target.value;
    console.log(this.selectedOption);
  }
}
