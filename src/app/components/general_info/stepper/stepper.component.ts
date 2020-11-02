import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  form:any
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveEvent(){
    let data:any=this.form.value;

    this.router.navigate(['../../summary/eventsummary/eventsummary.component.html'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }

}
