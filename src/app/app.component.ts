import { DATE_PIPE_DEFAULT_TIMEZONE, DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nerea';
  date = Date.now();
  hour = formatDate(this.date, 'H', 'en-US') as any as number;
  minute = formatDate(this.date, 'm', 'en-US') as any as number;
  seconds = (formatDate(this.date, 's', 'en-US')) as any as number;
  increment() {
    setInterval(() => {
      if (this.seconds < 59) {
        this.seconds++;
      } else if (this.seconds == 60 && this.minute < 59) {
        this.seconds = 0;
        this.minute++;
      } else if (this.seconds == 60 && this.minute == 60 && this.hour < 23) {
        this.seconds = 0;
        this.minute = 0;
        this.hour++;
      } else if (this.seconds == 60 && this.minute == 60 && this.hour == 24) {
        this.seconds = 0;
        this.minute = 0;
        this.hour = 0;
      }
    }, 1000);
  }

  ngOnInit() {
    this.increment();
  }
}
