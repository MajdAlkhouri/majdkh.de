import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //wie onload bei body
  images = ['prgramming.jpg', 'programming2.jpg', 'programming3.jpg'];
  currentImage = 0;
  showImage = true;
  ngOnInit() {
    this.uptadeImage();
  }

  uptadeImage() {
    setInterval(() => {
      // => für funktionen in angular
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
