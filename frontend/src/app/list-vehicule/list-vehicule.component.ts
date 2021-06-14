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

  listVehicule: Vehicule[] = [];
  valueColorFilter = "";

  constructor(private router:Router, private vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe(
        data=>
        {
          this.listVehicule = data;
        }
    )
  }

  goToVehicule(licencePlate: string) {
    this.router.navigateByUrl("/locations/vehicule?licencePlate="+licencePlate)
  }

  filterItemByColor(color: any) {
    this.vehiculeService.getVehiculesFilterByColor(color).subscribe(
        data=>
        {
          this.listVehicule = data;
        }
    )
  }
}
