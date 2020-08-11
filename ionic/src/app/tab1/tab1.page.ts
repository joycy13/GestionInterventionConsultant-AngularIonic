import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  intervention = {
    client: '',
    date_arrivee: '',
    date_depart: '',
    heure_arrivee: '',
    heure_depart: '',
    montant: '',
    type: '',
    info_sup: '',
    id_type_intervention: ''
  };
  clients = [];
  types = [];
  comment: string;

  constructor() { }

  ngOnInit() {
    fetch('http://localhost:3000/clients')
      .then(response => response.json())
      .then(value => this.clients = value);

      fetch('http://localhost:3000/typeintervention')
      .then(response => response.json())
      .then(value => this.types = value);
  }

  Form() {
    console.log(this.intervention);
    const id_client = this.intervention.client;

    const darrivee = new Date(this.intervention.date_arrivee);
    const date_arrivee: string = `${darrivee.getFullYear()}-${darrivee.getMonth()}-${darrivee.getDay()}`;
    const ddepart = new Date(this.intervention.date_depart);
    const date_depart: string = `${ddepart.getFullYear()}-${ddepart.getMonth()}-${ddepart.getDay()}`;

    const harrivee = new Date(this.intervention.heure_arrivee);
    const heure_arrivee: string = `${harrivee.getHours()}-${harrivee.getMinutes()}-${harrivee.getSeconds()}`;
    const hdepart = new Date(this.intervention.heure_depart);
    const heure_depart: string = `${hdepart.getHours()}-${hdepart.getMinutes()}-${hdepart.getSeconds()}`;

    const montant = this.intervention.montant;
    const typeIntervention = this.intervention.type;
    const info_sup = this.intervention.info_sup;
    const id_type_intervention = this.intervention.id_type_intervention;
    fetch('http://localhost:3000/interventions', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        typeIntervention,
        id_client,
        date_arrivee,
        date_depart,
        heure_arrivee,
        heure_depart,
        montant,
        info_sup,
        //id_type_intervention
      })
    })
      .then(response => response.json())
      .then(value => this.comment = 'Intervention bien ajouté ')
      .catch(err => this.comment = 'Erreur lors de l\'ajout');
  }


}
