import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  aboutMeDesc: string;
  projects = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Reddit Clone',
        desc: 'Full-stack Reddit clone developed with Angular & Spring',
        fullDesc: 'This is an ongoing full stack project to further my understanding and experience with Java Spring.',
        img: 'assets/reddit.jpg',
        link: 'https://github.com/Hansoners/reddit-spring-clone',
      },
      {
        title: 'Twitter Stock Trading Bot',
        desc: 'Stock trading bot using sentiment analysis on tweets by the US President',
        fullDesc: 'This was a fun little experimental project to analyze tweets from the POTUS with Google\'s Cloud Natural Language API. Based on the sentiment value of tweets mentioning companies in the S&P100, the bot would \'trade\' 1 share through either a long or short position. The bot compares the opening and closing price of the stock and calculates profit/losses based on the position.',
        img: 'assets/trump.jpg',
        link: 'https://github.com/Hansoners/twitter-stock-bot',
      },
      {
        title: 'Pokédex Chatbot',
        desc: 'Full-stack conversational experience using natural language processing with Dialogflow',
        fullDesc: 'This project was inspired by the growing popularity of chat bots. I used Google’s Dialogflow API for natural language processing and PokéAPI for the Pokémon data. The bot supports displaying pictures of the Pokémon, their moves, abilities, and more. The interface was made in Angular.',
        img: 'assets/pikachu.jpg',
        link: 'https://github.com/Hansoners/pokemon-chatbot',
      },
      {
        title: 'Popular Movies App',
        desc: 'Android app to discover popular movies, watch trailers, and read reviews',
        fullDesc: 'I started this project after following the Udacity Android Developer Nanodegree course. Through this project I learned the fundamentals of Android development and how to build clean and usable UIs using Material components. I also learned how to fetch data from APIs in Android and optimize views for various devices.',
        img: 'assets/bossbaby.png',
        link: 'https://github.com/Hansoners/PopularMovies',
      },
    ];
    this.aboutMeDesc = 'I am a fourth year computer science and business administration student at the University of Waterloo and Wilfrid Laurier University.';

  }

}
