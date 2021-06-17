import { Component, OnInit } from '@angular/core';
import {VehiculeService} from "../services/vehicule.service";
import {Vehicule} from "../interfaces/Vehicule";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.scss']
})
export class ListVehiculeComponent implements OnInit {

  listVehicule: Vehicule[] = [];
  valueColorFilter = "";
  valueBrandFilter = "";

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

  filterItemByBrand(brand: any) {
    this.vehiculeService.getVehiculesFilterByBrand(brand).subscribe(
        data=>
        {
          this.listVehicule = data;
        }
    )
  }
}
