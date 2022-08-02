import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public profiles : any[] = [
    {id: 0, src:'/assets/profile/logo1.png', name: 'User1', chain: true, link: ''},
    {id: 1, src:'/assets/profile/logo2.png', name: 'User2', chain: true, link: ''},
    {id: 2, src:'/assets/profile/nina_logo.png', name: 'Guest', chain: false, link: 'home'},
    {id: 3, src:'/assets/profile/plus.png', name: 'Add profile', chain: false, link: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
