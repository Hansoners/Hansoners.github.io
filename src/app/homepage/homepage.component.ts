import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  list = ['Hanson Chen',
  'Incoming SDE Intern @ Amazon | Summer \'21',
  'Software Developer Intern @ Magnet Forensics | Fall \'20',
  'Software Developer Intern @ RBC Financial Group | Winter \'20',
  'Software Developer Intern @ RBC Financial Group | Winter \'19',
  'BCS @ University of Waterloo \'21',
  'BBA @ Wilfrid Laurier University \'21'
];

  constructor() { }

  ngOnInit(): void {

  }

}
