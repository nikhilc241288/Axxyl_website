import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faPlus = faPlus;
  public selectedFAQ = null;

  constructor() {}

  ngOnInit(): void {}

  onExpand(div: any) {
    this.selectedFAQ == div
      ? (this.selectedFAQ = null)
      : (this.selectedFAQ = div);
  }
}
