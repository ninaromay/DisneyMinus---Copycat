import { Component, OnInit } from '@angular/core';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {


  public slider_movies  : any[] = []

  public options        : any[] = [
    'Featured',             'All Movies A-Z',     'Action/Adventure',     'Animation',
    'Comedy',               'Documentary',        'Drama',                'IMAX enhanced',
    'Romantic Comedies',    'Science Fiction',    'Shorts', 'Sports',     'Thrillers',
    'Westerns',             'Kids',               'Ultra HD and HDR'
  ];

  public op             : string = 'Featured'

  public active         : boolean = false;
  public selector       : number = 0;

  constructor( private bbdd : DisneyBbddService) { }

  ngOnInit(): void {
    console.log(this.bbdd);

    this.bbdd.getDisney_series().subscribe((movies : any) =>{
      console.log(movies);

      this.slider_movies =  movies.data;
      console.log(movies.data);

    })
  }

  public btn_selector (i : number) : boolean {
    return (this.selector == i) ? true : false;
  }

  public toggleActivate() : void {
    this.active = !this.active;
  }

  public switchTab(i : number) : any {
    this.toggleActivate();
    return this.op = this.options[i]
  }

}
