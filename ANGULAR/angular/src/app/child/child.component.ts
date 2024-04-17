import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() inputFromParent: string=""

  @Output() message=new EventEmitter<string>();

  childmessage(){
    this.message.emit("hello i am from child")
  }

  ngOnInit(): void {
  }

}
