import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-app-V2';
  lpTag = (<any>window).lpTag;

  constructor(
    private router: Router,
    private location: Location
  ){}

  public goSomewhere(url){
    // this.router.navigateByUrl(url).then ((e) => {
    //   if(e){
    //     console.log("navigation Successful! ");
       
    //   } else{
    //     console.log("navigation not successful");
    //   }
    // });
    window.location.href= "http://localhost:4200" + url;
  }

  public reloadthis(){
    console.log("lol");
    window.location.reload();
  }


  public goBack(): void {
    this.location.back();
  }
}
