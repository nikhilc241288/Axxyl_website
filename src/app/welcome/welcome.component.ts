import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('animation', [
      transition('void => *', [
        animate(
          '1s',
          keyframes([
            style({
              transform: 'scale3d(0.3, 0.3, 0.3)',
              easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              offset: 0,
            }),
            style({
              transform: 'scale3d(1.1, 1.1, 1.1)',
              easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              offset: 0.4,
            }),
            style({
              transform: 'scale3d(0.9, 0.9, 0.9)',
              easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              offset: 0.6,
            }),
            style({
              transform: 'scale3d(1, 1, 1)',
              easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
              offset: 1,
            }),
          ])
        ),
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
