import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventsummary',
  templateUrl: './eventsummary.component.html',
  styleUrls: ['./eventsummary.component.scss']
})
export class EventsummaryComponent implements OnInit {

  data:any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data =JSON.parse(params.data);
    })
  }

}
