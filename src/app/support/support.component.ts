import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  selectedTab: string = 'privacy';

  constructor() {}

  ngOnInit(): void {}

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
