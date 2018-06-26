import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  year: any = []
  constructor() { }

  ngOnInit() {
    for(let now = new Date().getFullYear(); now >= new Date().getFullYear() - 50; now--) {
      this.year.push(now)
    }
  }

}
