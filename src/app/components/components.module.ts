import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderMainComponent } from './slider-main/slider-main.component';
import { SliderCoverComponent } from './slider-cover/slider-cover.component';
import { SliderMenuComponent } from './slider-menu/slider-menu.component';
import { SliderBasicComponent } from './slider-basic/slider-basic.component';
import { AppRoutingModule } from '../app-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderMainComponent,
    SliderCoverComponent,
    SliderMenuComponent,
    SliderBasicComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderMainComponent,
    SliderCoverComponent,
    SliderMenuComponent,
    SliderBasicComponent,
    ViewComponent
  ]
})
export class ComponentsModule { }
