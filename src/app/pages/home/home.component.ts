import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sliders  : any[] = []
  public messages : string[] = [
    'New to Disney-',
    'What to watch Tonight',
    'Recommended for you',
    'Continue Watching',
    'Trending'
  ]


  constructor(private bbdd : DisneyBbddService,
    ) { }

    ngOnInit(): void {
      console.clear()
      this.bbdd.getDisney_bbdd().subscribe((data : any) => {

        let allMovies = data.data
        console.log(data.data);


        for (let i = 0; i < this.messages.length; i++) {
          let slider : any = { data: [], message : ''}

          let array  : any[]  = []
          for (let j = 0; j < 15; j++) {
            let num = Math.floor(Math.random() * 12)
            array[j] = allMovies.filter( (movie : any) => movie.id == num )
            // console.log(array[j]);

            slider.data = slider.data.concat(array[j])
          }

          slider.message = this.messages[i]
          // console.log(slider);
          this.sliders.push(slider)
          // console.log(this.sliders);

        }


    })
  }

  // public sliders : any = [
  //   {data : [], message:         , condition: ''},
  //   {data : [], message:  , condition: ''},
  //   {data : [], message:  , condition: ''},
  //   {data : [], message:  , condition: ''},
  //   {data : [], message:  , condition: ''},
  // ]

}
