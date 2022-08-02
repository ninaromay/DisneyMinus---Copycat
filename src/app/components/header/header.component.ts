import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  scrolled($e : any){
    let scrollOffset = $e.path[1].scrollY
    console.log(scrollOffset);
    if(scrollOffset != 0){
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  public scroll : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // public scrolled () :void {
  //   this.scroll = true;
  // }
}
