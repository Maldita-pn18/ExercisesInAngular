import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity3',
  templateUrl: './activity3.component.html',
  styleUrls: ['./activity3.component.css']
})
export class Activity3Component implements OnInit {
  public title = "BINDING METHODS OF ANGULAR"; 
  style = true; 
  isActive = true;
  property = true; 

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    alert("Hey there Angular developer!");
  }

}
