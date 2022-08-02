import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OriginalsComponent } from './originals/originals.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    WishlistComponent,
    OriginalsComponent,
    MoviesComponent,
    SeriesComponent,
    FiltroPipe,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    WishlistComponent,
    OriginalsComponent,
    MoviesComponent,
    SeriesComponent,
    WelcomeComponent
  ],
})
export class PagesModule { }
