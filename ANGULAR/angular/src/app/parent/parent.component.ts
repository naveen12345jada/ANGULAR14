import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

parentmessage: string="hello i am from parent passing message "
messagefromchild=" gsfgfdfdf";
recievemessage(e:string){
  this.messagefromchild=e


}
  ngOnInit(): void {
  }


}
