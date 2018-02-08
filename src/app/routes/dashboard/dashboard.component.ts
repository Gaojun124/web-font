import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  test: boolean;

  constructor() {
    this.test = true;
   }

  ngOnInit() {
  }

}
