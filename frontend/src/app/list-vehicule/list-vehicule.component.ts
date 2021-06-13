import { Component, OnInit } from '@angular/core';
import {VehiculeService} from "../vehicule.service";
import {Vehicule} from "../Vehicule";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.scss']
})
export class ListVehiculeComponent implements OnInit {

  constructor(private router:Router, private vehiculeService: VehiculeService) { }

  listVehicule: Vehicule[] = [];

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe(
        data=>
        {
          this.listVehicule = data;
        }
    )
  }

  goToVehicule(licencePlate: string) {
    const navigationDetails: string[] = ['/locations/vehicule?licencePlate='+licencePlate];
    this.router.navigateByUrl("/locations/vehicule?licencePlate="+licencePlate)
  }
}
