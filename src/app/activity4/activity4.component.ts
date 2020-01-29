import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity4',
  templateUrl: './activity4.component.html',
  styleUrls: ['./activity4.component.css']
})
export class Activity4Component implements OnInit {
  public parent = "PARENT TEMPLATE"; 
   public cdata:string;
   public pdata:string;
   public data : string;

  constructor() { }

  ngOnInit() {
  }
  onChange(){
    this.pdata = this.data;

  }

}
