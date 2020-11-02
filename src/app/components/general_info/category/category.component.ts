import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  form:any;

  categoryimageurl=['../../../../assets/images/event-category/music.png',
'../../../../assets/images/event-category/food.png',
'../../../../assets/images/event-category/art.png',
'../../../../assets/images/event-category/party.png',
'../../../../assets/images/event-category/sports.png',
'../../../../assets/images/event-category/networking.png'
];

categoryimagename=['Music','Food & Drink','Art & Culture','Parties and Nightlife','Sports and Wellness','Networking and Classes'];


  subcategories=['Alernative Music','Blues','Classical Music','Country Music','Dance Music','Electronic Music','Hip-Hop/RAP','Latin Music','Jazz','Opera','POP'];

  constructor(private router: Router, private route: ActivatedRoute) {

    this.form = new FormGroup(
      {
        category: new FormControl("",Validators.required),
        subcategory: new FormControl("",Validators.required)
      }
    );
   }

  ngOnInit(): void {
  }

}
