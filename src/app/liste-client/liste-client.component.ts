import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

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

  deleteClient(id) {

    fetch(`http://localhost:3000/clients/delete/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(value => console.log(value));

  }

  


}
