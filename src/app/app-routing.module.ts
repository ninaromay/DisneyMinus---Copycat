import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { OriginalsComponent } from './pages/originals/originals.component';
import { SearchComponent } from './pages/search/search.component';
import { SeriesComponent } from './pages/series/series.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'home',         component: HomeComponent },
  { path: '',             component: WelcomeComponent },
  { path: 'search',       component: SearchComponent },
  { path: 'watchlist',    component: WishlistComponent},
  { path: 'originals',    component: OriginalsComponent},
  { path: 'movies',       component: MoviesComponent},
  { path: 'movies/:url',  component: ViewComponent},
  { path: 'series',       component: SeriesComponent},
  { path: 'series/:url',  component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
