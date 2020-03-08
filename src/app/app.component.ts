import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  aboutMeDesc: string;
  projects = [];
  github: string;
  linkedin: string;
  email: string;
  phone: string;

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Reddit Clone',
        desc: 'Full-stack Reddit clone developed with Angular & Spring',
        fullDesc: '',
        img: 'assets/reddit.jpg',
        link: 'https://github.com/Hansoners/reddit-spring-clone',
      },
      {
        title: 'Twitter Stock Trading Bot',
        desc: 'Stock trading bot using sentiment analysis on tweets by the US President',
        fullDesc: '',
        img: 'assets/trump.jpg',
        link: 'https://github.com/Hansoners/twitter-stock-bot',
      },
      {
        title: 'Pokédex Chatbot',
        desc: 'Full-stack conversational experience using natural language processing with Dialogflow',
        fullDesc: '',
        img: 'assets/pikachu.jpg',
        link: 'https://github.com/Hansoners/pokemon-chatbot',
      },
      {
        title: 'Popular Movies App',
        desc: 'Android app to discover popular movies, watch trailers, and read reviews',
        fullDesc: '',
        img: 'assets/bossbaby.png',
        link: 'https://github.com/Hansoners/PopularMovies',
      },
    ];
    this.aboutMeDesc = 'I am a fourth year computer science and business administration student at the University of Waterloo and Wilfrid Laurier University.';
    this.github = 'https://www.github.com/hansoners';
    this.linkedin = 'https://www.linkedin.com/in/hansoners/';
    this.email = 'hglchen@edu.uwaterloo.ca';
    this.phone = '6473901392';
  }
}
