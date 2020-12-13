import { Component } from '@angular/core';
import {City} from './data/City';
import { cities } from './data/weatherMOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cs412';
  cities: City[] = cities;
  city: City;
  selectedCity: City;
  search: City;
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedCity(city: City): void {
    this.selectedCity = city;
    console.log(`${city.name}`);
  }
}
