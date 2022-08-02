import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisneyBbddService {


  // public disney_ddbb : any =[
  //   {
  //     id: 0,        company:"Pixar" , title: "Beyond Infinity: Buzz and the Journey to Lightyear", url: "beyond_infinity",

  //     img: {
  //       compose:      "/assets/movies/beyond_infinity/compose.png",
  //       badging:      "/assets/movies/beyond_infinity/badging.png",
  //       cover:        "/assets/movies/beyond_infinity/cover.png",
  //       logo:         "/assets/movies/beyond_infinity/logo.png",
  //       logo_long:    "/assets/movies/beyond_infinity/logo_long.png",
  //     },

  //     description: {
  //       short: "Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar\’s Lightyear. Dive into the origin and cultural impact of everyone\’s favorite Space Ranger, the art of designing a new \“human Buzz,\” and the challenges faced by the Lightyear crew along the way.",
  //       complete: "Explore the evolution of Buzz Lightyear from toy to human—and ubiquitous icon—through the lens of Pixar filmmakers, artists, and the studio\’s biggest fans. Dive into the origin and cultural impact of everyone\’s favorite Space Ranger from Toy Story, the art of designing a new \“human Buzz,\” and the challenges faced by the crew while working on Disney and Pixar\’s biggest blockbuster, Lightyear.",
  //       warning: "Some flashing lights sequences or patterns may affect photosensitive viewers.",
  //     },

  //     duration: "35m", seasons: "",  cc:"/assets/icons/cc.png", add: "false", group_watch: "false", director: "Tony Kaplan", creator: "",
  //     starring: ["Pete Docter", "Angus MacLane", "Galyn Susman", "Andrew Stanton", "Lee Unkrich"],

  //     release_date: "2022", genre:"Documentary", rating: "/assets/icons/rating_6.png", original: false, series: false, extras: []
  //   },
  //   {
  //     id: 1,        company:"Star", title: "The Martian", url: "the_martian",

  //     img: {
  //       compose:      "/assets/movies/the_martian/compose.png",
  //       badging:      "/assets/movies/the_martian/badging.png",
  //       cover:        "/assets/movies/the_martian/cover.png",
  //       logo:         "/assets/movies/the_martian/logo.png",
  //       logo_long:    "/assets/movies/the_martian/logo_long.png",
  //     },

  //     description: {
  //       short: "From legendary director Ridley Scott (Alien, Prometheus) comes a gripping tale of human strength and the will to survive, starring Matt Damon as an astronaut stranded on Mars.",
  //       complete: "The film that blew audiences away is back and bigger than ever with the all-new extended edition of the 7-time Academy Award nominated space film. The Extended Edition includes an extended cut featuring 10 minutes of brand new footage not shown in theaters.",
  //       warning: "",
  //     },

  //     duration: "2h 22m", seasons: "",  ad:"/assets/icons/ad.png", cc:"/assets/icons/cc.png", add: "false", group_watch: "false", director: "Ridley Scott", creator: "",
  //     starring: ["Matt Damon", "Jessica Chastain", "Kristen Wiig", "Jeff Daniels", "Michael Peña", "Kate Mara"],

  //     release_date: "2015", genre:"Survival, Science Fiction, Action-Adventure", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: []
  //   },
  //   {
  //     id: 2,          company:"Disney", title: "Frozen", url: "frozen",

  //     img: {
  //       background:     "/assets/movies/frozen/scale.png",
  //       compose:        "/assets/movies/frozen/compose.png",
  //       badging:        "/assets/movies/frozen/badging.png",
  //       cover:          "/assets/movies/frozen/cover.png",
  //       logo:           "/assets/movies/frozen/logo.png",
  //       logo_long:      "/assets/movies/frozen/logo_long.png",
  //     },

  //     description: {
  //       short: "Fearless optimist Anna teams up with rugged mountain man Kristoff in a race to find Anna\'s sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.",
  //       description: "Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna\'s sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.  Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, will the trio find Elsa in time to save Arendelle?",
  //       warning: "",
  //     },

  //     duration: "1h 42m", seasons: "",  ad:"", cc:"/assets/icons/cc.png", add: "false", group_watch: "false", director: "Chris Buck, Jennifer Lee", creator: "",
  //     starring: ["Kristen Bell", "Idina Menzel", "Jonathan Groff",  "Josh Gad", "Santino Montana", "Alan Tudyk"],

  //     release_date: "2013", genre:"Family, Fantasy, Kids, Animation, Musical", rating: "/assets/icons/rating_6.png", original: false, series: false, extras: []
  //   },
  //   {
  //     id: 3,          company:"Star", title: "The Simsons", url: "simsons",

  //     img: {
  //       background:     "/assets/series/simsons/scale.png",
  //       compose:        "/assets/series/simsons/compose.png",
  //       badging:        "/assets/series/simsons/badging.png",
  //       cover:          "/assets/series/simsons/cover.png",
  //       logo:           "/assets/series/simsons/logo.png",
  //       logo_long:      "/assets/series/simsons/logo_long.png",
  //     },

  //     description: {
  //       short: "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
  //       complete: "Winner of the 2019 Emmy\® Award for Outstanding Animated Program, THE SIMPSONS continues to strike a chord with viewers for irreverently poking fun at anything and everything.  With its subversive humor and delightful wit, the series has made an indelible imprint on American pop culture, and its family members \– Homer (Dan Castellaneta), Marge (Julie Kavner), Bart (Nancy Cartwright), Lisa (Yeardley Smith) and Maggie \– are television icons.  Already the longest-running scripted series in television history, the Emmy® Award\-, Annie Award\- and Peabody Award-winning animated comedy has surpassed Gunsmoke\’s record of the most episodes for a scripted primetime television series. THE SIMPSONS is a Gracie Films Production in association with 20th Century Fox Television. The series was created by Matt Groening and developed by James L. Brooks, Matt Groening and Sam Simon.  James L. Brooks and Matt Groening are executive producers. Al Jean and Matt Selman also serve as executive producers and the series\’ showrunners.",
  //       warning: "",
  //     },

  //     duration: "24m", seasons: "33 seasons", ad:"", cc:"/assets/icons/cc.png", add: "false", group_watch: "false", director: "", creator: "Matt Groening",
  //     starring: ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright",  "Yeardley Smith", "Hank Azaria", "Pamela Hayden"],

  //     release_date: "1989-2021", genre:"Comedy, Animation", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: [{}]
  //   },
  //   {
  //     id: 4,          company:"Marvel", title: "Hawkeye", url: "hawkeye",

  //     img: {
  //       background: "/assets/series/hawkeye/scale.png",
  //       compose:    "/assets/series/hawkeye/compose.png",
  //       badging:    "/assets/series/hawkeye/badging.png",
  //       cover:      "/assets/series/hawkeye/cover.png",
  //       logo:           "/assets/series/hawkeye/logo.png",
  //       logo_long:      "/assets/series/hawkeye/logo_long.png",
  //     },

  //     description: {
  //       short: "Marvel Studios\’ “Hawkeye” is an original new series set in post-blip New York City where former Avenger Clint Barton aka Hawkeye has a seemingly simple mission: get back to his family for Christmas. But when a threat from his past shows up, Hawkeye reluctantly teams up with Kate Bishop, a 22-year-old skilled archer and his biggest fan, to unravel a criminal conspiracy.",
  //       complete: "Marvel Studios\’ “Hawkeye” is an original new series set in post-blip New York City where former Avenger Clint Barton aka Hawkeye has a seemingly simple mission: get back to his family for Christmas. But when a threat from his past shows up, Hawkeye reluctantly teams up with Kate Bishop, a 22-year-old skilled archer and his biggest fan, to unravel a criminal conspiracy.",
  //       warning: "Some flashing lights sequences or patterns may affect photosensitive viewers.",
  //     },

  //     duration: "50m", seasons: "1 season", ad:"/assets/icons/ad.png", cc:"/assets/icons/cc.png", add: "false", group_watch: "false", director: "", creator: "Jonathan Igla",
  //     starring: ["Jeremy Renner", "Hailee Steinfeld", "Vera Farmiga",  "Fra Fee", "Tony Dalton", "Zahn McClarnon"],


  //     release_date: "2021", genre:"Super Hero, Action-Adventure, Buddy", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: [{}]
  //   },

  // ];

  public disney_ddbb : any =[
    {
      id: 0,        company:"Pixar" , title: "Beyond Infinity: Buzz and the Journey to Lightyear", url: "beyond_infinity",

      img: {
        background:   "/assets/movies/beyond_infinity/scale.png",
        compose:      "/assets/movies/beyond_infinity/compose.png",
        badging:      "/assets/movies/beyond_infinity/badging.png",
        cover:        "/assets/movies/beyond_infinity/cover.png",
        logo:         "/assets/movies/beyond_infinity/logo.png",
        logo_long:    "/assets/movies/beyond_infinity/logo_long.png",
      },

      description: {
        short: "Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar\’s Lightyear. Dive into the origin and cultural impact of everyone\’s favorite Space Ranger, the art of designing a new \“human Buzz,\” and the challenges faced by the Lightyear crew along the way.",
        complete: "Explore the evolution of Buzz Lightyear from toy to human—and ubiquitous icon—through the lens of Pixar filmmakers, artists, and the studio\’s biggest fans. Dive into the origin and cultural impact of everyone\’s favorite Space Ranger from Toy Story, the art of designing a new \“human Buzz,\” and the challenges faced by the crew while working on Disney and Pixar\’s biggest blockbuster, Lightyear.",
        warning: "Some flashing lights sequences or patterns may affect photosensitive viewers.",
        short_phone: 'Explore the evolution of Buzz Lightyear from Toy Story to Lightyear.'
      },

      duration: "35m", seasons: "", ad: true, cc:"/assets/icons/cc.png", add: false, message:'', director: "Tony Kaplan", creator: "",
      starring: ["Pete Docter", "Angus MacLane", "Galyn Susman", "Andrew Stanton", "Lee Unkrich"], watching: true,

      release_date: "2022", genre:"Documentary", rating: "/assets/icons/rating_6.png", original: false, series: false, extras: []
    },
    {
      id: 1,        company:"Star", title: "The Martian", url: "the_martian",

      img: {
        background:   "/assets/movies/the_martian/scale.png",
        compose:      "/assets/movies/the_martian/compose.png",
        badging:      "/assets/movies/the_martian/badging.png",
        cover:        "/assets/movies/the_martian/cover.png",
        logo:         "/assets/movies/the_martian/logo.png",
        logo_long:    "/assets/movies/the_martian/logo_long.png",
      },

      description: {
        short: "From legendary director Ridley Scott (Alien, Prometheus) comes a gripping tale of human strength and the will to survive, starring Matt Damon as an astronaut stranded on Mars.",
        complete: "The film that blew audiences away is back and bigger than ever with the all-new extended edition of the 7-time Academy Award nominated space film. The Extended Edition includes an extended cut featuring 10 minutes of brand new footage not shown in theaters.",
        warning: "",
      },

      duration: "2h 22m", seasons: "",  ad: false, cc:"/assets/icons/cc.png", add: false , message:'', director: "Ridley Scott", creator: "",
      starring: ["Matt Damon", "Jessica Chastain", "Kristen Wiig", "Jeff Daniels", "Michael Peña", "Kate Mara"], watching: false,

      release_date: "2015", genre:"Survival, Science Fiction, Action-Adventure", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: []
    },
    {
      id: 2,          company:"Disney", title: "Frozen", url: "frozen",

      img: {
        background:     "/assets/movies/frozen/scale.png",
        compose:        "/assets/movies/frozen/compose.png",
        badging:        "/assets/movies/frozen/badging.png",
        cover:          "/assets/movies/frozen/cover.png",
        logo:           "/assets/movies/frozen/logo.png",
        logo_long:      "/assets/movies/frozen/logo_long.png",
      },

      description: {
        short: "Fearless optimist Anna teams up with rugged mountain man Kristoff in a race to find Anna\'s sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.",
        description: "Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna\'s sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.  Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, will the trio find Elsa in time to save Arendelle?",
        warning: "",
      },

      duration: "1h 42m", seasons: "",  ad:false, cc:"/assets/icons/cc.png", add: false, message:'', director: "Chris Buck, Jennifer Lee", creator: "",
      starring: ["Kristen Bell", "Idina Menzel", "Jonathan Groff",  "Josh Gad", "Santino Montana", "Alan Tudyk"], watching: false,

      release_date: "2013", genre:"Family, Fantasy, Kids, Animation, Musical", rating: "/assets/icons/rating_6.png", original: false, series: false, extras: []
    },
    {
      id: 3,          company:"Star", title: "The Simsons", url: "the_simsons",

      img: {
        background:     "/assets/series/simsons/scale.png",
        compose:        "/assets/series/simsons/compose.png",
        badging:        "/assets/series/simsons/badging.png",
        cover:          "/assets/series/simsons/cover.png",
        logo:           "/assets/series/simsons/logo.png",
        logo_long:      "/assets/series/simsons/logo_long.png",
      },

      description: {
        short: "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
        complete: "Winner of the 2019 Emmy\® Award for Outstanding Animated Program, THE SIMPSONS continues to strike a chord with viewers for irreverently poking fun at anything and everything.  With its subversive humor and delightful wit, the series has made an indelible imprint on American pop culture, and its family members \– Homer (Dan Castellaneta), Marge (Julie Kavner), Bart (Nancy Cartwright), Lisa (Yeardley Smith) and Maggie \– are television icons.  Already the longest-running scripted series in television history, the Emmy® Award\-, Annie Award\- and Peabody Award-winning animated comedy has surpassed Gunsmoke\’s record of the most episodes for a scripted primetime television series. THE SIMPSONS is a Gracie Films Production in association with 20th Century Fox Television. The series was created by Matt Groening and developed by James L. Brooks, Matt Groening and Sam Simon.  James L. Brooks and Matt Groening are executive producers. Al Jean and Matt Selman also serve as executive producers and the series\’ showrunners.",
        warning: "",
      },

      duration: "24m", seasons: "33 seasons", ad:false, cc:"/assets/icons/cc.png", add: false, message:'New episode every Wednesday', director: "", creator: "Matt Groening",
      starring: ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright",  "Yeardley Smith", "Hank Azaria", "Pamela Hayden"], watching: false,

      release_date: "1989-2021", genre:"Comedy, Animation", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: [{}]
    },
    {
      id: 4,          company:"Marvel", title: "Hawkeye", url: "hawkeye",

      img: {
        background: "/assets/series/hawkeye/scale.png",
        compose:    "/assets/series/hawkeye/compose.png",
        badging:    "/assets/series/hawkeye/badging.png",
        cover:      "/assets/series/hawkeye/cover.png",
        logo:           "/assets/series/hawkeye/logo.png",
        logo_long:      "/assets/series/hawkeye/logo_long.png",
      },

      description: {
        short: "Marvel Studios\’ “Hawkeye” is an original new series set in post-blip New York City where former Avenger Clint Barton aka Hawkeye has a seemingly simple mission: get back to his family for Christmas. But when a threat from his past shows up, Hawkeye reluctantly teams up with Kate Bishop, a 22-year-old skilled archer and his biggest fan, to unravel a criminal conspiracy.",
        complete: "Marvel Studios\’ “Hawkeye” is an original new series set in post-blip New York City where former Avenger Clint Barton aka Hawkeye has a seemingly simple mission: get back to his family for Christmas. But when a threat from his past shows up, Hawkeye reluctantly teams up with Kate Bishop, a 22-year-old skilled archer and his biggest fan, to unravel a criminal conspiracy.",
        warning: "Some flashing lights sequences or patterns may affect photosensitive viewers.",
      },

      duration: "50m", seasons: "1 season", ad:true, cc:"/assets/icons/cc.png", add:false , message:'', director: "", creator: "Jonathan Igla",
      starring: ["Jeremy Renner", "Hailee Steinfeld", "Vera Farmiga",  "Fra Fee", "Tony Dalton", "Zahn McClarnon"], watching: false,


      release_date: "2021", genre:"Super Hero, Action-Adventure, Buddy", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: [{}]
    },
    {
      id: 3,          company:"Star", title: "The Simsons", url: "simsons",

      img: {
        background:     "/assets/series/simsons/scale.png",
        compose:        "/assets/series/simsons/compose.png",
        badging:        "/assets/series/simsons/badging.png",
        cover:          "/assets/series/simsons/cover.png",
        logo:           "/assets/series/simsons/logo.png",
        logo_long:      "/assets/series/simsons/logo_long.png",
      },

      description: {
        short: "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
        complete: "Winner of the 2019 Emmy\® Award for Outstanding Animated Program, THE SIMPSONS continues to strike a chord with viewers for irreverently poking fun at anything and everything.  With its subversive humor and delightful wit, the series has made an indelible imprint on American pop culture, and its family members \– Homer (Dan Castellaneta), Marge (Julie Kavner), Bart (Nancy Cartwright), Lisa (Yeardley Smith) and Maggie \– are television icons.  Already the longest-running scripted series in television history, the Emmy® Award\-, Annie Award\- and Peabody Award-winning animated comedy has surpassed Gunsmoke\’s record of the most episodes for a scripted primetime television series. THE SIMPSONS is a Gracie Films Production in association with 20th Century Fox Television. The series was created by Matt Groening and developed by James L. Brooks, Matt Groening and Sam Simon.  James L. Brooks and Matt Groening are executive producers. Al Jean and Matt Selman also serve as executive producers and the series\’ showrunners.",
        warning: "",
      },

      duration: "24m", seasons: "33 seasons", ad:false, cc:"/assets/icons/cc.png", add: false, message:'New episode every Wednesday', director: "", creator: "Matt Groening",
      starring: ["Dan Castellaneta", "Julie Kavner", "Nancy Cartwright",  "Yeardley Smith", "Hank Azaria", "Pamela Hayden"], watching: false,

      release_date: "1989-2021", genre:"Comedy, Animation", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: [{}]
    },
    {
      id: 1,        company:"Star", title: "The Martian", url: "the_martian",

      img: {
        background:   "/assets/movies/the_martian/scale.png",
        compose:      "/assets/movies/the_martian/compose.png",
        badging:      "/assets/movies/the_martian/badging.png",
        cover:        "/assets/movies/the_martian/cover.png",
        logo:         "/assets/movies/the_martian/logo.png",
        logo_long:    "/assets/movies/the_martian/logo_long.png",
      },

      description: {
        short: "From legendary director Ridley Scott (Alien, Prometheus) comes a gripping tale of human strength and the will to survive, starring Matt Damon as an astronaut stranded on Mars.",
        complete: "The film that blew audiences away is back and bigger than ever with the all-new extended edition of the 7-time Academy Award nominated space film. The Extended Edition includes an extended cut featuring 10 minutes of brand new footage not shown in theaters.",
        warning: "",
      },

      duration: "2h 22m", seasons: "",  ad: true, cc:"/assets/icons/cc.png", add: false , message:'', director: "Ridley Scott", creator: "",
      starring: ["Matt Damon", "Jessica Chastain", "Kristen Wiig", "Jeff Daniels", "Michael Peña", "Kate Mara"], watching: false,

      release_date: "2015", genre:"Survival, Science Fiction, Action-Adventure", rating: "/assets/icons/rating_12.png", original: false, series: false, extras: []
    },
    {
      id: 2,          company:"Disney", title: "Frozen", url: "frozen",

      img: {
        background:     "/assets/movies/frozen/scale.png",
        compose:        "/assets/movies/frozen/compose.png",
        badging:        "/assets/movies/frozen/badging.png",
        cover:          "/assets/movies/frozen/cover.png",
        logo:           "/assets/movies/frozen/logo.png",
        logo_long:      "/assets/movies/frozen/logo_long.png",
      },

      description: {
        short: "Fearless optimist Anna teams up with rugged mountain man Kristoff in a race to find Anna\'s sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.",
        description: "Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna\'s sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.  Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, will the trio find Elsa in time to save Arendelle?",
        warning: "",
      },

      duration: "1h 42m", seasons: "",  ad:false, cc:"/assets/icons/cc.png", add: false, message:'', director: "Chris Buck, Jennifer Lee", creator: "",
      starring: ["Kristen Bell", "Idina Menzel", "Jonathan Groff",  "Josh Gad", "Santino Montana", "Alan Tudyk"], watching: false,

      release_date: "2013", genre:"Family, Fantasy, Kids, Animation, Musical", rating: "/assets/icons/rating_6.png", original: false, series: false, extras: []
    },

  ];





  public nav_menus : any = [
    {id: 0, title: "HOME",      icon: "", svg: ""},
    {id: 1, title: "SEARCH",    icon: "", svg: ""},
    {id: 2, title: "WATCHLIST", icon: "", svg: ""},
    {id: 3, title: "ORIGINALS", icon: "", svg: ""},
    {id: 4, title: "MOVIES",    icon: "", svg: ""},
    {id: 5, title: "SERIES",    icon: "", svg: ""},

  ];

  constructor(public http : HttpClient) { }


  getDisney_bbdd() : any {
     return this.http.get<any>('http://localhost:3005')
  }

  getDisney_movies() : any {
    return this.http.get<any>('http://localhost:3005/movies')
  }
  getDisney_moviesById(id : number) : any {
    return this.http.get<any>('http://localhost:3005/movies/id/' + id)
  }
  getDisney_moviesByName(url : string) : any {
    return this.http.get<any>('http://localhost:3005/movies/' + url)
  }

  getDisney_series() : any {
    return this.http.get<any>('http://localhost:3005/series')
  }
  getDisney_seriesById(id: number) : any {
    return this.http.get<any>('http://localhost:3005/series/id/' + id)
  }
  getDisney_seriesByName(url : string) : any {
    return this.http.get<any>('http://localhost:3005/series/' + url)
  }

  getDisney_originals() : any {
    return this.http.get<any>('http://localhost:3005/originals')
  }

  getMenus() : any {
    return this.http.get<any>('http://localhost:3005/menus')
  }

  getMain_slider() : any{
    return this.http.get<any>('http://localhost:3005/main')
  }
}
