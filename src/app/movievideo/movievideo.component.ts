import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movievideo',
  templateUrl: './movievideo.component.html',
  styleUrls: ['./movievideo.component.scss'],
})
export class MovievideoComponent implements OnInit {
  trailerUrl!: SafeResourceUrl;
  @Input() key!: string;
  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.key) {
      const url = `https://www.youtube.com/embed/${this.key}`;
      this.trailerUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}
