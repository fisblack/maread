import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component'
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor() { 
    this.numbers = Array(20).fill(5)
  }

  ngOnInit() {
  }
  show: string = 'list'
  numbers: any[]
  view(type: string) {
    this.show = type
  }
}
