import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  city: string;
  weather: any;
  constructor(private wxService: wxService) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.wxService.getWeather(this.city).subscribe(
      response => {
        console.log(`Response: ${response}`);
        this.weather = response.current;
      }
    );
  };

  get10Day(this.city) {

  };

  getHourlyWeather(this.city) {

  };
}
