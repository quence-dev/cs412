/*
  Spencer Vilicic
  CS412 - 12/15/20
  Full Stack API Test
 */
import { Component } from '@angular/core';

/*
Use a validated form [require the input term and validate it is longer than 1
character] and a ‘query’ button on your Angular app to initiate the request,
passing any search term that you might need for your back-end API.
b. On the Angular side, use a service to make the call to the back-end Node
route.
c. Use three Angular components. The first component should hold the form,
and the second should display the result of the query. Use @Input in the child
to receive data from its parent for display. The third component will enclose
and be the parent of the other two.
d. When displaying data, use *ngIf and *ngFor to parse through an iterable
containing your response data. When no data is present, *ngIf should hide
that portion of your page. Note: If your back-end source returns just one item,
duplicate it on the back end to present an array of data to the front end (just a
few duplicates needed to demonstrate *ngFor).
d. When displaying data, include an indicator to show whether the data was
retrieved from cache on the backend, or from a third-party API call.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cs412';
  constructor() { }

  ngOnInit(): void { }
}
