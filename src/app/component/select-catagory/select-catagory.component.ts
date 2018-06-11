import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-catagory.component.html',
  styleUrls: ['./select-catagory.component.css']
})
export class SelectCatagoryComponent implements OnInit {
  categories = [
    {"id": 1, "name": "Brad"},
    {"id": 2, "name": "Jules"},
    {"id": 3, "name": "Jeff"}
  ]
  languages = [
    'TH',
    'EN'
  ]
  constructor() { }

  ngOnInit() {
  }

  @Input()
    for: string
}
