import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisneyBbddService } from 'src/app/services/disney-bbdd.service';
import { DataDB } from '../view/view.component';

@Component({
  selector: 'app-slider-basic',
  templateUrl: './slider-basic.component.html',
  styleUrls: ['./slider-basic.component.scss']
})
export class SliderBasicComponent implements OnInit, OnChanges {

  @HostListener('window:resize', ['$event'])
  resize(e : any){
    let windowWidth = window.innerWidth;
    if(windowWidth <= 480){
      this.visibleItems= this.lim / 1.5;
    } else{
      this.visibleItems=this.lim * 1.8;
    }
  }

  public interval : any;

  public foto                   : number  = 0;
  public visibleItems           : number  = 3;
  @Input() public slider_basic  : any     = [];
  @Input() public lim           : number  = 5;
  @Input() public message       : string  = '';

  constructor(
    public disney_bbdd : DisneyBbddService,
    public activatedRoute : ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.slider_basic = this.disney_bbdd.disney_ddbb;
    // this.disney_bbdd.getDisney_bbdd().subscribe((data : DataDB) => {
    //   this.slider_basic = data.data
    // });

    let windowWidth = window.innerWidth;
    if(windowWidth <= 480){
      this.visibleItems= this.lim / 1.5;
    } else{
      this.visibleItems=this.lim * 1.01;
    }

    if(window.innerWidth <=480){
      this.interval = setInterval(()=> this.next(), 15000);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.slider_basic = this.disney_bbdd.disney_ddbb;
  }

  public widthSlider(){
    return `${this.slider_basic.length * 100 /this.visibleItems}%`;
  }

  public transSlider(){
    return `translateX(-${100*this.visibleItems*this.foto/this.slider_basic.length}%)`;
  }

  public widthImg(){
    return `${100/this.slider_basic.length}%`;
  }

  public prev(){
    if(this.foto > 0){
      this.foto--;
      // this.foto = 0
    }
  }

  public next(){
    this.foto++;
  }


}
