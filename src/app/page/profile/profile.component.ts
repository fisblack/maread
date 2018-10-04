import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor() { }
  

  ngOnInit() {
  }
  alert: boolean = false
  showAlert() {
    this.alert = true
    setTimeout(()=> {
      this.alert = false
    },3000)
  }

}
