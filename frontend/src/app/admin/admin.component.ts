import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VehiculeService} from "../vehicule.service";
import {Vehicule} from "../Vehicule";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

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
    //TODO
  }
}



@Component({
  selector: 'dialog-manageVehicule',
  templateUrl: 'dialog-manageVehicule.html',
})
export class DialogManageVehicule {
  titreFormulaire: String = "Ajouter une nouvelle voiture";

  constructor(
      public dialogRef: MatDialogRef<DialogManageVehicule>,
      @Inject(MAT_DIALOG_DATA) public data: Vehicule) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  manageVehicule(data: Vehicule) {

  }
}