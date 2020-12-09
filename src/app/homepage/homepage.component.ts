import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  list = [
    'Hanson Chen',
    'About Me:',
    'Incoming SDE Intern @ Amazon - Summer \'21',
    'Developer Intern @ Magnet Forensics - Fall \'20',
    'Developer Intern @ RBC - Winter \'19 and \'20',
    'BCS @ University of Waterloo \'21',
    'BBA @ Wilfrid Laurier University \'21',
    'github.com/hansoners'
  ];
  constructor() {}
}
