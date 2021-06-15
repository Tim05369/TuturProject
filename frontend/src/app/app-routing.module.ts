import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListVehiculeComponent} from "./list-vehicule/list-vehicule.component";
import {AccountComponent} from "./account/account.component";
import {ContactComponent} from "./contact/contact.component";
import {DetailsVehiculeComponent} from "./details-vehicule/details-vehicule.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "locations", component: ListVehiculeComponent},
  { path: "contact", component: ContactComponent},
  { path: "mon-compte", component: AccountComponent},
  { path: "locations/vehicule", component: DetailsVehiculeComponent},
  { path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
