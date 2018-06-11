import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../../page/index/index.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'seach', component: IndexComponent},
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
