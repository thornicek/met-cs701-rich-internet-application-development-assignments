# CS701 Assignment 10

# Part 1

For part 1 of the assignment, I have downloaded the tour-of-heroes application, from the following link: https://angular.io/tutorial/toh-pt3. I then opened the application by downloading the application on my desktop and running the following commands in my terminal: 	Opened Terminal -> cd desktop -> cd toh-pt3 -> npm install --force -> ng serve –open. The proof can be found in Problem 1.jpg file.

# Part 2

For part 2, I have switch to the page Add service, https://angular.io/tutorial/toh-pt4, of the same tutorial, I followed in part 1, and followed the instruction until I added two functioning services: HeroService and MessageService. I stopped when I reached the page Add navigation with routing. I captured the essential steps:

1.	Create the Hero service in termninal -> ng generate service hero
2.	Import the data to the Hero service ts file and add a getHeroes() method:

 import { Hero } from './hero';
import { HEROES } from './mock-heroes';
getHeroes(): Hero[] {
  return HEROES;
}

3.	Register the provider, which will instantiate the HeroService class to provide the service:

@Injectable({
  providedIn: 'root',
})
4.	In the heroes.component.ts file -> Delete the Heroes import and replace it with HeroService. Then replace the definition of the heroes property with a decleration. Then inject the HeroService and add getHeroes() method, which will retrieve the heroes from the service, and call the method in ngOnInit():
import { HeroService } from '../hero.service';
heroes: Hero[] = [];
constructor(private heroService: HeroService) {}
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}  
ngOnInit(): void {
  this.getHeroes();
}
5.	In order to allow the application to be asynchronous implement observable -> in hero.service.ts file import observable and replace the getHeroes() method to use Observable. Then go into heroes.component.ts file and subscribe(), to pass the emitted hero array to the callback, which sets the component’s hero property:
In hero.service.ts:
import { Observable, of } from 'rxjs';
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
In heroes.component.ts:
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

6.	Create the message component and then generate the message service in Terminal  :
ng generate component messages
ng generate service message
7.	Update the AppComponent to display the MessageComponent:
<h1>{{title}}</h1>
<app-heroes></app-heroes>
<app-messages></app-messages>
8.	In the message.service.ts file add the add() method and the clear() method, which will add a message to the cache and clear the cache, respectively:
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
9.	In the hero.service.ts file: Import the MessageService,  modify the constructor to have a parameter that declares a private message and then modify the getHeroes() method to send a message, when the heroes are fetched:
import { MessageService } from './message.service';
constructor(private messageService: MessageService) { }
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return heroes;
}
10.	In the message.component.ts file import the MessageService and modify the constructor with a parameter that declares a public messageService property, to which Angular will inject the singleton MessageService property when it creates the MessagesComponent:
import { MessageService } from '../message.service';
constructor(public messageService: MessageService) {}
11.	Modify the messages.component.html file to look like this:
<div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button type="button" class="clear"
          (click)="messageService.clear()">Clear messages</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
12.	Modify the heroes.component.ts to display and send messages when the user clicks and selects a hero, tracking the user’s selection history:
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}


The code for part 2 can be found in the toh-pt4 folder.