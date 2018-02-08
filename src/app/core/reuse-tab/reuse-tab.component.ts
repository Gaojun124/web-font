import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.scss']
})
export class ReuseTabComponent implements OnInit {
  tabs: Array<any>;
  constructor() {
    this.tabs = [
      {
        name: 'Tab 1',
        content: 'Content of Tab Pane 1'
      },
      {
        name: 'Tab 2',
        content: 'Content of Tab Pane 2'
      },
      {
        name: 'Tab 3',
        content: 'Content of Tab Pane 3'
      }
    ];
  }

  ngOnInit() {

  }

}
