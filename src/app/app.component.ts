import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  aboutMeDesc: string;
  projects = [];

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Reddit Clone',
        desc: 'Full-stack Reddit clone developed with Angular & Spring',
        fullDesc: '',
        img: 'assets/reddit.jpg',
        link: '',
      },
      {
        title: 'Twitter Stock Trading Bot',
        desc: 'Stock trading bot using sentiment analysis on tweets by the US President',
        fullDesc: '',
        img: 'assets/trump.jpg',
        link: '',
      },
      {
        title: 'Pokédex Chatbot',
        desc: 'Full-stack conversational experience using natural language processing',
        fullDesc: '',
        img: 'assets/pikachu.jpg',
        link: '',
      },
      {
        title: 'Popular Movies App',
        desc: 'Android app to discover popular movies, watch trailers, and read reviews',
        fullDesc: '',
        img: 'assets/bossbaby.png',
        link: '',
      },
    ];
    this.aboutMeDesc = 'I am a fourth year computer science and business administration student at the University of Waterloo and Wilfrid Laurier University.';
  }
}
