import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberofpeople',
  templateUrl: './numberofpeople.component.html',
  styleUrls: ['./numberofpeople.component.scss']
})
export class NumberofpeopleComponent implements OnInit {

  quantity:number=100;
  i=10;
  j:number;

  constructor() { }

  ngOnInit(): void {
  }

  minus(){
    if(this.quantity>50){
      this.j=this.quantity - this.i;
      this.quantity=this.j;
    }
  }

  plus(){
    if(this.quantity<=400){
      this.j=this.quantity + this.i;
      this.quantity=this.j;
    }
  }

}
