import { Component, Input, OnInit } from '@angular/core';
import {City, Hour, Day} from '../data/City';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() today: boolean;
  @Input() hourly: boolean;
  @Input() extended: boolean;
  @Input() weather: any;
  @Input() hours: any;
  @Input() days: any;
  @Input() cached: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
