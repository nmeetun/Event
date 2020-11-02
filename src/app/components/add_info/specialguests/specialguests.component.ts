import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialguests',
  templateUrl: './specialguests.component.html',
  styleUrls: ['./specialguests.component.scss']
})
export class SpecialguestsComponent implements OnInit {

  quantity:number=1;
  i=1;
  url ="../../../../assets/images/event-category/upload.png";

  constructor() { }

  ngOnInit(): void {
  }

  minus(){
    if(this.i>0){
      this.i--;
      this.quantity=this.i;
    }
  }

  plus(){
    if(this.i <=10){
      this.i++;
      this.quantity=this.i;
    }
  }

  onselectFile(e){
    if(e.target.files){  //input type files DOM property
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);  //read any image or file as url
      reader.onload=(event:any) =>{
        this.url = event.target.result;
      }
    }
  }

}
