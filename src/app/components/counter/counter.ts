import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  counter = signal(0)

  startButtonDisabled = signal(false)
  stopButtonDisabled = signal(true)
  interval: number | null = null
  start() {
    this.interval = setInterval(() => {
      this.counter.update(val => val + 1)
    },1)

    this.startButtonDisabled.set(true)
    this.stopButtonDisabled.set(false)
  }

  stop() {
    if(this.interval) {
      clearInterval(this.interval)
    }

    this.startButtonDisabled.set(false)
    this.stopButtonDisabled.set(true)
  }

  reset() {
    if(this.interval) {
      clearInterval(this.interval)
    }

    this.startButtonDisabled.set(false)
    this.stopButtonDisabled.set(true)
    this.counter.set(0)
  }
}
