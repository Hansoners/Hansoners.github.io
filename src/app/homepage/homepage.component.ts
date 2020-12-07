import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  list = ['Hanson Chen',
  'Incoming SDE Intern @ Amazon | Summer \'21',
  'Software Developer Intern @ Magnet Forensics | Fall \'20',
  'Software Developer Intern @ RBC | Winter \'20',
  'Software Developer Intern @ RBC | Winter \'19',
  'BCS @ University of Waterloo \'21',
  'BBA @ Wilfrid Laurier University \'21'
];

  constructor() { }

  ngOnInit(): void {

  }

}
