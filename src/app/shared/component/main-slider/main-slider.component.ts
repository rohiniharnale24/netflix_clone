import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieApiService } from '../../service/movie-api.service';
import { Results, RootObject } from '../../model/movieArray';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent implements OnInit {
  title = 'netflix_clone';
  moviesArray: Array<Results> = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  constructor(private _movies: MovieApiService) {}
  ngOnInit(): void {
    this._movies.getTredingMovies().subscribe((res) => {
      console.log(res);
      this.moviesArray = res;
      console.log(this.moviesArray);
    });
  }
}
