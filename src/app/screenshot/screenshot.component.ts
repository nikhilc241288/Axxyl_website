import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.css'],
  animations: [
    trigger('slidAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('800ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class ScreenshotComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    items: 2,
    margin: 20,
    center: true,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
  customOptionsTest: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 20,
    center: true,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      376: {
        items: 2,

        autoWidth: true,
        margin: 0,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
  slidesStore = [
    {
      src: './assets/showcase1.jpeg',
      alt: 'alt1',
      title: 'title1',
    },
    {
      src: './assets/showcase2.jpeg',
      alt: 'alt2',
      title: 'title2',
    },
    {
      src: './assets/showcase3.jpeg',
      alt: 'alt3',
      title: 'title1',
    },
    {
      src: './assets/showcase4.jpeg',
      alt: 'alt4',
      title: 'title1',
    },
    {
      src: './assets/showcase5.jpeg',
      alt: 'alt5',
      title: 'title1',
    },
    {
      src: './assets/showcase6.jpeg',
      alt: 'alt6',
      title: 'title1',
    },
  ];

  testimony = [
    {
      src: './assets/testimonial/1479905563-testi-03.jpg',
      name: 'Alex Rezvova',
      city: '',
      comment: 'Very excellent application and the fares are accurate',
      title: 'test1',
    },
    {
      src: './assets/testimonial/1479989558-test-04.jpg',
      name: 'Albin Erlend',
      city: '',
      comment: 'At starting it was good and when I started using AXXYL',
      title: 'test2',
    },
    {
      src: './assets/testimonial/1479905440-testi-02.jpg',
      name: 'Jacob Kai',
      city: 'Indiana, USA',
      comment: 'Best app for booking one way cab. Nice billing system.',
      title: 'test3',
    },
    {
      src: './assets/testimonial/1479989575-testi-01.jpg',
      name: 'Alex Rezvova',
      city: 'New York, USA',
      comment: 'this is very easy to make book the cab so i like this app',
      title: 'test4',
    },
  ];
  constructor() {
    // Carousel.prototype.onTouchMove = () => {};
  }

  ngOnInit(): void {}
}
