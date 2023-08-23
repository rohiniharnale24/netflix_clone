import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieApiService } from '../../service/movie-api.service';
import { Results } from '../../model/movieArray';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss'],
})
export class MoviedetailComponent implements OnInit {
  movieId!: string;
  singleMovieDetails!: Results;
  constructor(
    private route: ActivatedRoute,
    private _movieObj: MovieApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.movieId = param['movieId'];
      console.log(this.movieId);
      if (this.movieId) {
        this._movieObj.getSingleMovie(this.movieId).subscribe((res) => {
          console.log(res);
          this.singleMovieDetails = res;
        });
      }
    });
  }
}
