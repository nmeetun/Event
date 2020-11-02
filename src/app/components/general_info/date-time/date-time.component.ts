import { AmazingTimePickerService } from 'amazing-time-picker';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {
  months=['January','February','March','April','May','June','July','August','September','October','November','December']


  constructor(private atp:AmazingTimePickerService) {}

  ngOnInit(): void {
  }

  dateFilter = date => {
    const day =date.getDate();
    return day !== 1 && day !==3;
  }

  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }

}
