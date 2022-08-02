import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';

@Component({
  selector: 'app-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.scss']
})
export class SliderMenuComponent implements OnInit {

  public slider_menus : any = [];

  constructor(  private activatedRoute  : ActivatedRoute,
                private sliderbbdd      : DisneyBbddService ) {
                }

  ngOnInit(  ): void {
  this.sliderbbdd.getMenus().subscribe((data : any) => {
    this.slider_menus = data.data;
  });

  }

}
