import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieApiService } from '../../service/movie-api.service';
import { Results, RootObject } from '../../model/movieArray';
import { ActivatedRoute } from '@angular/router';

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
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor(
    private _movies: MovieApiService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._movies.getTredingMovies().subscribe((res) => {
      console.log(res);
      this.moviesArray = res;
      console.log(this.moviesArray);
    });
  }
}
