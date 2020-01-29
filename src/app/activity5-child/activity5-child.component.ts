import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Applicant } from '../applicant';

@Component({
  selector: 'app-activity5-child',  
  templateUrl: './activity5-child.component.html',
  styleUrls: ['./activity5-child.component.css']
})
export class Activity5ChildComponent implements OnInit {
  @Input() applicant: Applicant;
  @Output() response = new EventEmitter;
  @Output() data = new EventEmitter;
  public approvedata = "Application is Approved!";
  public declinedata = "Application is Declined!";
  public listApproved = "List of Approved Application";
  approve: boolean = true;
  decline: boolean = true;
  public people: Array<Applicant>; //list of approved applicants



  constructor() {
    this.people = new Array<Applicant>();
    this.applicant = new Applicant();
  }


  ngOnInit() {
  }

  onclick(value: string) {
    console.log(value) 
      this.response.emit(value);
    
      if (value === "Application is Approved!") {
        this.people.push(this.applicant)
      } else {
      this.data.emit(this.applicant);
      }
      this.applicant = new Applicant();
    
  }


}
