import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
listeclient: [];
  constructor() { }

  ngOnInit() {

    this.getlisteclient();
  }
  getlisteclient() {
    fetch('http://localhost:3000/liste-client')
      .then(response => response.json())
      .then(value => this.listeclient = value
      );
  }
}
