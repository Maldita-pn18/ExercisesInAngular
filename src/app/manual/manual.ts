import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<p class= "primary" >Welcome to new challenges</p> ',
  styles: ['.primary{color:blue}']
})
export class ManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
