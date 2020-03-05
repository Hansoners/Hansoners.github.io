import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio';
  projects = [];

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Reddit Clone',
        desc: 'full-stack Reddit clone made with Angular & Spring',
        fullDesc: '',
        img: '',
        link: '',
      },
      {
        title: 'Twitter Stock Trading Bot',
        desc: 'Stock trading bot using sentiment analysis on tweets by the US President',
        fullDesc: '',
        img: '',
        link: '',
      },
      {
        title: 'Pokédex Chatbot',
        desc: 'Full-stack conversational experience using natural language processing',
        fullDesc: '',
        img: '',
        link: '',
      },
      {
        title: 'Popular Movies App',
        desc: 'Android app to discover popular movies, watch trailers, and read reviews',
        fullDesc: '',
        img: '',
        link: '',
      },
    ];

    console.log(this.projects);
  }
}
