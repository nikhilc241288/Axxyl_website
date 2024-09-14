import { Component, OnInit } from '@angular/core';
import {
  faCar,
  faShieldAlt,
  faMapMarker,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-amazing-features',
  templateUrl: './amazing-features.component.html',
  styleUrls: ['./amazing-features.component.css'],
})
export class AmazingFeaturesComponent implements OnInit {
  faCar = faCar;
  faShieldAlt = faShieldAlt;
  faMapMarker = faMapMarker;
  faComments = faComments;

  constructor() {}

  ngOnInit(): void {}
}
