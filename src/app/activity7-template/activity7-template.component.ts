import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity7-template',
  templateUrl: './activity7-template.component.html',
  styleUrls: ['./activity7-template.component.css']
})
export class Activity7TemplateComponent implements OnInit {
  fullname : string;
  email: string;
  gender: string;
  g:string;
  f:string;
  e:string;
  submit: boolean = true;
 edit: boolean = false;


  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.fullname);
    this.g = this.gender;
    this.f = this.fullname;
    this.e = this.email;
    this.submit = false;
    this.edit = true;

  }
  onclick(){
    this.edit= false;
    this.submit= true;
  }

}
