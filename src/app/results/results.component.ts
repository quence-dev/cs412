import { Component, Input, OnInit } from '@angular/core';
import {City, Hour, Day} from '../data/City';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  // @Input() selectedCity: City;
  @Input() today: boolean;
  @Input() hourly: boolean;
  @Input() extended: boolean;
  @Input() weather: any;
  @Input() hours: any;
  @Input() days: any;
  @Input() cached: boolean;
  name: string;
  country: string;
  tempF: number;
  condition: string;
  constructor() {
    this.name = '';
    this.country = '';
    this.tempF = 0;
    this.condition = '';
  }

  ngOnInit(): void {
  }

}
