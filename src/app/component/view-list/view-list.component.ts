import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
    type: string
}
