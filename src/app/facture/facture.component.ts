import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import jspdf from 'jspdf';




@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() { }

  ngOnInit() {
  }

}
