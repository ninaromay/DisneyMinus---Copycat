import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMenuComponent } from './slider-menu.component';

describe('SliderMenuComponent', () => {
  let component: SliderMenuComponent;
  let fixture: ComponentFixture<SliderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
