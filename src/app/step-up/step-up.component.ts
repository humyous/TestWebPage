import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-step-up',
  templateUrl: './step-up.component.html',
  styleUrls: ['./step-up.component.css']
})
export class StepUpComponent implements OnInit{
  lpTag = (<any>window).lpTag;
  window = (<any>window);

  
  constructor() { 
    this.newPageStepUp();

    
  }

  public newPageStepUp(){
    // console.log(this.lpTag);
    // this.lpTag.newPage(location.href, {
    //   section : [ 'stepup' ]
    // });
    this.window.lpTag.section = [
      'stepup'
    ];

    this.window.lpGetAuthenticationToken = function (callback) {
      callback("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodW16YSIsInN1YiI6InRlc3RzIiwibmJmIjoxNTcyNTIxMjYxLCJleHAiOjE2MDQwNTcyNjEsImlhdCI6MTU3MjUyMTI2MSwianRpIjoiaWQxIiwidHlwIjoiand0In0.jwQ6QMobSJKXwTXYluqI9hH-TxnRCyDzvsq5_NTIkKB9ITtr2CB0a3s4WYZCU9eNeiyIDFw75kPbnPhx-4_bQwZRtcoTRd9Uxufjamg4z14Ec7L2gA5FY1aqbNCzX0JoT7VtQmRwRWdnbglzyq7I-6izEIvek60FA-wVATN6J8Y8wWaQevEwkvaxvC7KxQ4eKiG6sY3nhu0cVv8sI3QxInHdEETDarEbvJ8swAf28Ll80m3GA0oL46VjgfMqfycM3mrne4wivl5EKw5Sp-jFXGageA6KjeTfRl7DuUh4HmEea0_K74YQE450OYGi0Ak1s25vpIZL2mlKR2-m6bGy2g");
    }
    
    function identityfn(callback){
      console.log("Hi Tim");
      callback ({
        iss: "humza",
        acr: "loa1",
        sub: "tests"
      });
      
    }
    this.lpTag.identities = [];
    this.lpTag.identities.push(identityfn);

    
  }

  locationstuff(){
    window.location.reload(true);
    console.log("lol this reloads");
    // this.window.location = document.URL;
  }

  ngOnInit() {
    

  }

}

function identityfn(callback){
  // callback({
  //   iss: "humza",
  //   acr: "loa1",
  //   sub: "tests"
  //   });
}
