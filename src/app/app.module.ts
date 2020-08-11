import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { FactureComponent } from './facture/facture.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { pipe, from } from 'rxjs';





@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomepageComponent,
    ListeClientComponent,
    FactureComponent,
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgDatepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatNativeDateModule,
  MatInputModule,
  BrowserAnimationsModule
   

  
  

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

