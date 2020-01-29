import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-activity7-driven',
  templateUrl: './activity7-driven.component.html',
  styleUrls: ['./activity7-driven.component.css']
})
export class Activity7DrivenComponent implements OnInit {
  showup: boolean=false;
  reactiveForm = this.fb.group({
    firstname: ["", Validators.required],
    lastname: ["", Validators.required],
    email: ['', [Validators.required, Validators.email]],
    street: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    code: ["", Validators.required],

  })  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(){
  
    // let Form = JSON.stringify(this.reactiveForm.value);
    // alert(Form)
    this.showup=true;
  }

}
