import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DbDisneyService } from 'src/app/services/db-disney.service';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
  public tabs          : number = 0;
  public view          : Pelicula = PeliculaBase
  public view_specific : any = []
  public loading       : boolean = false
  public slider_sug    : any = []

  public view_phone : boolean = false;

  constructor(
    public activatedRoute : ActivatedRoute,
    public disney_bbdd    : DisneyBbddService,
  ) { }

  ngOnInit(): void {
    // this.view_specific = this.disney_bbdd.disney_ddbb;
    // console.log(this.disney_bbdd.caca());

    this.disney_bbdd.getDisney_bbdd().subscribe((data : DataDB) => {
      // console.log(data);
      // console.log(data.data);


      this.view_specific = data.data

      let slider : any = []
      let array : any[] = []
      for (let i = 0; i < 2; i++) {
        let num = Math.floor(Math.random() * 4)
        array[i] = this.view_specific.filter( (movie : any) => movie.id == num );
        slider = slider.concat(array[i])
      }
      this.slider_sug.push(slider)
      console.log(this.slider_sug);


      this.activatedRoute.params.subscribe( ({url}) => {
        let search : any = this.view_specific.find((data : any) => data.url === url );
        this.view = search;
        this.loading = true
        }
      )



      let windowWidth = window.innerWidth;
      if(windowWidth <= 480){
        this.view_phone = true;
      }
    })

  }
}


export interface Pelicula {
  id:           number;
  company:      string;
  title:        string;
  url:          string;
  img:          Img;
  description:  Description;
  duration:     string;
  seasons:      string;
  ad:           boolean;
  cc:           string;
  add:          boolean;
  message:      string;
  director:     string;
  creator:      string;
  starring:     string[];
  watching:     boolean;
  release_date: string;
  genre:        string;
  rating:       string;
  original:     boolean;
  series:       boolean;
  extras:       any[];
}

export interface Description {
  short:       string;
  complete:    string;
  warning:     string;
  short_phone: string;
}

export interface Img {
  background: string;
  compose:    string;
  badging:    string;
  cover:      string;
  logo:       string;
  logo_long:  string;
}

export interface DataDB {
  data:   any;
  status: number;
  error:  string;
}




let PeliculaBase = {
  id:           0,
  company:      '',
  title:        '',
  url:          '',
  img:          {
    background: '',
    compose:    '',
    badging:    '',
    cover:      '',
    logo:       '',
    logo_long:  '',
  },
  description:  {
    short:       '',
    complete:    '',
    warning:     '',
    short_phone: '',
  },
  duration:     '',
  seasons:      '',
  ad:           true,
  cc:           '',
  add:          true,
  message:      '',
  director:     '',
  creator:      '',
  starring:     [],
  watching:     true,
  release_date: '',
  genre:        '',
  rating:       '',
  original:     true,
  series:       true,
  extras:       [],
}
