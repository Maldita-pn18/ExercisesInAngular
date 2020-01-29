import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant';

@Component({
  selector: 'app-activity5-parent',
  templateUrl: './activity5-parent.component.html',
  styleUrls: ['./activity5-parent.component.css']
})
export class Activity5ParentComponent implements OnInit {0
  public listDeclined= "List of Declined Application";
  public enroll : Boolean;
  public applicant: Applicant;
  public response: string;
  public gender:string;
  public last:string;
  public first:string;
  public student: Array<Applicant>
  
  constructor() { 
    this.applicant = new Applicant();
    this.student = new Array<Applicant>()
  }

  ngOnInit() {
    
  }
  onClick(){

    this.applicant = {
      fname: this.first,
      lname: this.last,
      gender: this.gender,
      enrolled: this.enroll ? "Yes": "No",
    }
    this.first = "";
    this.last = "";
    this.gender = "";
    this. enroll = false;

  }
  toggelEnroll() {
    this.enroll = !this.enroll;
  }
  getresponse(value:string){
    // console.log(value)
    console.log("testing");
    this.response = value;
    
  }

  getDeclinedData(data) {
    this.student.push(data)
  }
  }


