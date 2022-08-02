import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DbDisneyService {

  public propiedad = 'cruck'
  public metodo() : any {
    return 'hola de nuevo'
  }

  constructor(private http : HttpClient) { }

  public slider_menus : any = [
    {id: 0, name: "Disney",               img_menu: "/assets/menus/disney.png",               video: "/assets/menus/videos/disney.mp4",               url: "disney" },
    {id: 1, name: "Pixar",                img_menu: "/assets/menus/pixar.png",                video: "/assets/menus/videos/pixar.mp4",                url: "pixar" },
    {id: 2, name: "Marvel",               img_menu: "/assets/menus/marvel.png",               video: "/assets/menus/videos/marvel.mp4",               url: "marvel"   },
    {id: 3, name: "Star Wars",            img_menu: "/assets/menus/star_wars.png",            video: "/assets/menus/videos/star_wars.mp4",            url: "star_wars"     },
    {id: 4, name: "National Geographic",  img_menu: "/assets/menus/national_geographic.png",  video: "/assets/menus/videos/national_geographic.mp4",  url: "national_geographic"    },
    {id: 5, name: "Star",                 img_menu: "/assets/menus/star.png",                 video: "/assets/menus/videos/star.mp4",                 url: "star" }
  ];
}
