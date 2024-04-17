import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  background="red"
  change() {
    this.background="blue"

  }
  isdisabled : boolean=false;
  username:string=" hello naveen";
}
