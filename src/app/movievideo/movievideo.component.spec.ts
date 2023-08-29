import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovievideoComponent } from './movievideo.component';

describe('MovievideoComponent', () => {
  let component: MovievideoComponent;
  let fixture: ComponentFixture<MovievideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovievideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovievideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
