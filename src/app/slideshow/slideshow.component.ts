import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['prgramming.jpg', 'programming2.jpg', 'programming3.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    ' Alles was man beschreiben kann, kann man auch programmierenen.',
  ];
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
