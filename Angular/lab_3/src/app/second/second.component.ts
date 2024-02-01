import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  index = 1;
  iSrc = `assets/pics/img${this.index}.jpg`;
  intervalId: any;
  prevImg() {
    if (this.index !== 1) {
      this.index--;
      this.iSrc = `assets/pics/img${this.index}.jpg`;
    }
  }
  nextImg() {
    if (this.index !== 5) {
      this.index++;
      this.iSrc = `assets/pics/img${this.index}.jpg`;
    }
  }
  start() {
    this.intervalId = setInterval(() => {
      if (this.index === 5) {
        this.index = 0;
      }
      this.nextImg();
    }, 1000);
  }
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
