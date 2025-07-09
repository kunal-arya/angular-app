import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  greetings = signal("Hello, World!")

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key} in the input`)
  }
}
