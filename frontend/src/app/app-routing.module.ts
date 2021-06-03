import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListVehiculeComponent} from "./list-vehicule/list-vehicule.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "locations", component: ListVehiculeComponent},

  { path: "mon-compte", component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
