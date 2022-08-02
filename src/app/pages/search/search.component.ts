import { Component, OnInit } from '@angular/core';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searching      : string = ''

  public collections    : any[] = [
    {id: 0, alt: 'walt_disney_studios', src: '/assets/collections/walt_disney_studios/scale.png'},
    {id: 1, alt: 'thor', src: '/assets/collections/thor/scale.png'},
    {id: 2, alt: 'guardians_ofthe_galaxy', src: '/assets/collections/guardians_ofthe_galaxy/scale.png'},
    {id: 3, alt: 'spiderman', src: '/assets/collections/spiderman/scale.png'},
    {id: 4, alt: 'pride', src: '/assets/collections/pride/scale.png'},
    {id: 5, alt: 'toy_story', src: '/assets/collections/toy_story/scale.png'},
    {id: 6, alt: 'dr_strange', src: '/assets/collections/dr_strange/scale.png'},
    {id: 7, alt: 'obi_wan', src: '/assets/collections/obi_wan/scale.png'},
    {id: 8, alt: 'sharks', src: '/assets/collections/sharks/scale.png'},
    {id: 9, alt: 'spanish', src: '/assets/collections/spanish/scale.png'},
    {id: 10, alt: 'drama', src: '/assets/collections/drama/scale.png'},
    {id: 11, alt: 'sports', src: '/assets/collections/sports/scale.png'},
    {id: 12, alt: 'black_stories', src: '/assets/collections/black_stories/scale.png'},
    {id: 13, alt: 'the_simsons', src: '/assets/collections/the_simsons/scale.png'},
    {id: 14, alt: 'disney_channel', src: '/assets/collections/disney_channel/scale.png'},
    {id: 15, alt: 'disney_channel_movies', src: '/assets/collections/disney_channel_movies/scale.png'},
    {id: 16, alt: 'disney_junior', src: '/assets/collections/disney_junior/scale.png'},
    {id: 17, alt: 'all_collections', src: '/assets/collections/all_collections/scale.png'},
  ];

  public slider_search  : any[] = []

  constructor( private bbdd : DisneyBbddService) { }

  ngOnInit(): void {
    this.bbdd.getDisney_bbdd().subscribe((movie : any) => {
      this.slider_search = movie.data
    })
  }

}
