import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: [];
  typeintervention: [];

  clientForm = new FormGroup({
    nomEntreprise: new FormControl(''),
    email: new FormControl(''),
    prenom: new FormControl(''),
    nom: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    pays: new FormControl(''),
    cp: new FormControl(''),
    typeintervention: new FormControl(''),
    tel: new FormControl(''),
    info_sup: new FormControl(''),
    
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getClient();
    this.getAllIntervention();
    




  } 
  onSubmit() {

    this.addClient(
    this.clientForm.value.nomEntreprise,
    this.clientForm.value.email,
    this.clientForm.value.nom,
     this.clientForm.value.prenom,
     this.clientForm.value.adresse,
     this.clientForm.value.cp,
     this.clientForm.value.ville,
     this.clientForm.value.pays,
     this.clientForm.value.tel,
     this.clientForm.value.info_sup,
     this.clientForm.value.typeintervention
     )
    .then(response => response.json())
    .then(value => {
      this.clientForm.reset()
    });
  }





  //onSubmit() {

  // this.addClient(
  //this.clientForm.value.nomEntreprise,
  //  this.clientForm.value.email
  //  console.log(this.clientForm.value);
  //}

  addClient(
    nomEntreprise: string,
    email: string,
    nom: string,
    prenom: string,
    ville: string,
    cp: string,
    adresse: string,
    pays: string,
    tel: string,
    info_sup: string,
    typeintervention: string
  ) {
    return fetch('http://localhost:3000/clients', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomEntreprise,
        email,
        nom,
         prenom,
         ville,
         cp,
         adresse,
         pays,
         tel,
         info_sup,
         typeintervention
      })
    });
  }

  getClient() {
    fetch('http://localhost:3000/clients')
      .then(response => response.json())
      .then(value => this.clients = value
      );
  }


  getAllIntervention() {
    fetch('http://localhost:3000/typeintervention')
      .then(response => response.json())
      .then(value => this.typeintervention = value
      );
  }

  




}





