import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieApiService } from '../../service/movie-api.service';
import { Itrailer, Results } from '../../model/movieArray';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss'],
})
export class MoviedetailComponent implements OnInit {
  movieId!: string;
  trailerUrl!: SafeResourceUrl;
  singleMovieDetails!: Results;
  movieTrailerArray: Itrailer[] = [];
  constructor(
    private route: ActivatedRoute,
    private _movieObj: MovieApiService,
    private _sanitizer: DomSanitizer
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
        this._movieObj.getMovieTrailer(this.movieId).subscribe((trailer) => {
          console.log('trailers', trailer);
          this.movieTrailerArray = trailer;
        });
      }
    });
  }
  movieTrailer(key: string) {
    let url = `https://www.youtube.com/embed/${key}`;
    this.trailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
