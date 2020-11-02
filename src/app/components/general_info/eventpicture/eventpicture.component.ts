import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventpicture',
  templateUrl: './eventpicture.component.html',
  styleUrls: ['./eventpicture.component.scss']
})
export class EventpictureComponent implements OnInit {
  url ="../../../../assets/images/event-category/upload.png";

  constructor() { }

  ngOnInit(): void {
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
