import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VehiculeService} from "../vehicule.service";
import {Vehicule} from "../Vehicule";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor(private vehiculeService: VehiculeService) { }

  listVehicule: Vehicule[] = [];

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe(
        data=>
        {
          this.listVehicule = data;
        }
    )
  }

  ajouterVehicule() {
    //TODO
  }

  editerVehicule(licencePlate: string) {
    //TODO
  }

  supprimerVehicule(licencePlate: string) {
    this.vehiculeService.delVehicule(licencePlate).subscribe(value => {
        this.vehiculeService.getVehicules().subscribe(
            data=>
            {
              this.listVehicule = data;
            }
        )
      }
    )
  }
}
