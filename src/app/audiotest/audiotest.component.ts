import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';



@Component({
  selector: 'app-audiotest',
  templateUrl: './audiotest.component.html',
  styleUrls: ['./audiotest.component.css']
})
export class AudiotestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  test(){
    console.log("test")
    var request = require('request');
    var convID = "04fe3049-bbfa-4794-b220-98f6c33bc09e";
    var fileID = "ec502ad6-4aba-484c-884e-84061db33963_uuid_d05c3995-7763-4b16-973d-f1e4baf78561_17-09-2019_10-57-50-336.M4A";
    var bearer = "b9921dcf1140a28a069966614567ca2dc731b0df046eaccda1f46c1dd5c543e3";
    var body = {"conversationId": convID, "fileId": fileID};
    var oauth = "Bearer " + bearer;
    var url = 'https://lo.msghist.liveperson.net/messaging_history/api/account/89945776/conversations/file-sharing';

    request.post({
      url: url,
      body: body,
      json: true,
      headers: {
      'Content-Type': 'application/json',
      'Authorization': oauth
      } }, function (e, r, b) {
        console.log(b);
        extractLength(b);

      });


      function extractLength(myURL){
        const { getAudioDurationInSeconds } = require('get-audio-duration')
        getAudioDurationInSeconds(myURL).then((duration) => {
          console.log(duration);
        })
        
        }
    
  }

}
