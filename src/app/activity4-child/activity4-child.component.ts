import { Component, Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-activity4-child',
  templateUrl: './activity4-child.component.html',
  styleUrls: ['./activity4-child.component.css']
})
export class Activity4ChildComponent implements OnInit {
  public child = "CHILD TEMPLATE"; 
  @Input() parentData: string;
  @Output() childEvent = new EventEmitter;
   public cdata:String;
   public pdata:String;


  constructor() { }

  ngOnInit() {
  }
  onChange(value:string){
    this.childEvent.emit(value);
  }

}
