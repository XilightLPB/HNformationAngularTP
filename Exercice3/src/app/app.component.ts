import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Transaction tracker</h1>
    <p> we are currently {{currentDate}}<p>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  public currentDate: Date | undefined;


  ngOnInit() {
    // Uses set Interval to update time every second
    setInterval(() => {
      this.currentDate = new Date();;
    }, 1000);
  }

  

  
  
}
