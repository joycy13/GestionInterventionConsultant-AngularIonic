import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { FactureComponent } from './facture/facture.component';



const routes: Routes = [
  
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'liste-client', component: ListeClientComponent },
  { path: 'facture', component: FactureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
