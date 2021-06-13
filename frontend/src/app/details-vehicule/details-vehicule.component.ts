import { Component, OnInit } from '@angular/core';
import { DetailsVehiculeService } from '../services/detailsVehicule/details-vehicule.service';
import {Vehicule} from "../interfaces/vehicules";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-vehicule',
  templateUrl: './details-vehicule.component.html',
  styleUrls: ['./details-vehicule.component.scss']
})
export class DetailsVehiculeComponent implements OnInit {

  vehicule: Vehicule | undefined;

  constructor(
      private DetailsVehiculeService: DetailsVehiculeService,
      private route: ActivatedRoute
  ) { }

  getVehicule(licencePlate: String): void {
    this.DetailsVehiculeService.getVehicule(licencePlate)
        .subscribe(data => {
          this.vehicule = data;
        })
  }

  ngOnInit(): void {
    this.route.queryParams
        .subscribe(params => {
          this.getVehicule(params.licencePlate)
        });
  }

}
