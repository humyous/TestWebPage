import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lp-tag-test',
  templateUrl: './lp-tag-test.component.html',
  styleUrls: ['./lp-tag-test.component.css']
})

export class LpTagTestComponent implements OnInit {
  lpTag = (<any>window).lpTag;
  constructor() { 

  //   this.lpTag.events.bind({
  //     eventName : "VAR_ADDED",
  //     appName: "lp_sdes",
  //     func: (data) => {console.log(data)},
  //     triggerOnce: false
  // });

  var appName = "VAR_ADDED";
  var eventName = "lp_sdes";
  function callbackFunction(data, eventInfo){
    console.log("LP_SDES WORKS" + JSON.stringify(data) + " triggered by: " +  JSON.stringify(eventInfo));
  };
  this.lpTag.events.bind(eventName, appName, callbackFunction);

  }

  sendSde(){
    this.lpTag.sdes = this.lpTag.sdes||[];

    this.lpTag.sdes.push({
      "type": "cart", //MANDATORY
      "total": 11.7, //TOTAL CART VALUE
      "numItems": 6, //NUMBER OF ITEMS IN CART
      "products": [{  //ARRAY OF PRODUCTS
          "product": {
          "name": "prod1", //PRODUCT NAME
          "category": "category", //PRODUCT CATEGORY NAME
          "sku": "sku", //PRODUCT SKU OR UNIQUE IDENTIFIER
          "price": 7.8 //PRODUCT PRICE
          }, "quantity": 1 //NUMBER OF PRODUCTS
      }]
    });
  }


  ngOnInit() {

  }

}
