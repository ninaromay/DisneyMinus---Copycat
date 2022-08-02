import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCoverComponent } from './slider-cover.component';

describe('SliderCoverComponent', () => {
  let component: SliderCoverComponent;
  let fixture: ComponentFixture<SliderCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
