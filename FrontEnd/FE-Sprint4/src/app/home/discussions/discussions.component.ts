import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/api-call.service';
import { Discussions } from './discussions.model';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit {
  discussions = []
  constructor(private getapi:ApiCallService) { }

  ngOnInit() {
    this.getapi.getSuggestedDiscussions().subscribe((results)=>{
      console.log(JSON.stringify(results))
      for(var counter:number =0;counter<5;counter++){
        this.discussions.push(new Discussions(JSON.stringify(results[counter]["TopicName"]),JSON.stringify(results[counter]["Description"])))
      }
    })
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}
