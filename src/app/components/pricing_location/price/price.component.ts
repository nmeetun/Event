import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  quantity:number=1;
  i=1;

  cardimageurl=["../../../../assets/pricing/apple.png",
  "../../../../assets/pricing/cirrus.gif",
  "../../../../assets/pricing/diners.png",
  "../../../../assets/pricing/discover.png",
  "../../../../assets/pricing/mastercard.jpg",
  "../../../../assets/pricing/netbanking.png",
  "../../../../assets/pricing/paypal.png",
  "../../../../assets/pricing/visa.png"];

  constructor() { }

  ngOnInit(): void {
  }

  minus(){
    if(this.i>=0){
      this.i--;
      this.quantity=this.i;
    }
  }

  plus(){
    if(this.i <=4){
      this.i++;
      this.quantity=this.i;
    }
  }

}
