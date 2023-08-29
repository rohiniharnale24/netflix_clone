import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovienameComponent } from './moviename.component';

describe('MovienameComponent', () => {
  let component: MovienameComponent;
  let fixture: ComponentFixture<MovienameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovienameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovienameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
