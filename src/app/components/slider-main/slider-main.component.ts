import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.scss']
})
export class SliderMainComponent implements OnInit, OnChanges {

  public slider : any = [];
  public slider_dots : any = [];

  public foto : number = 1;
  @Input() public lim : number = 0;
  // public m_length : number = 5;
  public interval : any;
  public m_length : number = this.slider.length;

  public trans : boolean = false;

  constructor(  public activatedRoute : ActivatedRoute,
                public disney_ddbb    : DisneyBbddService ) { }

  ngOnInit(): void {
    this.setFoto();

    if(window.innerWidth > 960){
      this.interval = setInterval(()=>{
        this.next()
        if(this.foto >= this.slider.length){
          this.foto = 0
        }
      }, 8500)
    }

    this.disney_ddbb.getMain_slider().subscribe((data : any) => {
      this.slider = this.slider.concat(data.data, data.data[0], data.data[1], data.data[2])
      this.slider_dots = data.data;
      this.m_length = this.slider.length
    })
  }

  ngOnChanges(changes: SimpleChanges) : void{
    this.m_length = this.slider.length;
  }

  public widthSlider(){
    return `${this.m_length*100}%`;
  }

  public transSlider(){
    // return `transformX(${100 * this.foto/this.m_length}%)`;
    return `translateX(-${100*this.foto/this.m_length}%)`;
  }

  public widthImg() : string{
    return `${100/this.m_length}%`;
  }

  public next(){
    this.pausa()
    this.foto++;

    if(this.foto == this.m_length - 2 || this.foto == 1){
      setTimeout(()=> {
        this.trans = true
        this.foto = 1
        setTimeout(()=>{ this.trans = false }, 100)
      }, 500)
    }
    else {
      console.log(this.foto);
      this.trans = false
    }
  }

  public prev(){
    this.pausa()
    this.foto--

    if( this.foto < 1 ){

      setTimeout(()=>{
        this.foto = this.m_length - 3
        this.trans = true
        setTimeout(()=>{ this.trans = false },100)
      },500)
    }

    else{
      this.trans = false
    }
  }

  public setActive(i:number) : boolean{
    if(this.foto - 1 == i){
      return true;
    }
    return false;
  }

  public setFoto() : number {
    if(window.innerWidth > 960){
      this.foto = 1;
      return  this.foto;
    }
    return 0;
  }

  public pausa() : any {
    setTimeout(()=>{}, 60000)
  }

}
