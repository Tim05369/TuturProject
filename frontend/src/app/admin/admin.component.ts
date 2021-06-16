import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VehiculeService} from "../vehicule.service";
import {Vehicule, vehiculeContainsAllKey, vehiculeContainsAllValues} from "../Vehicule";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor(private vehiculeService: VehiculeService, public dialog: MatDialog) { }

  listVehicule: Vehicule[] = [];

  ngOnInit(): void {
    this.listerVehicule();
  }

  listerVehicule(){
    this.vehiculeService.getVehicules().subscribe(
        data=>
        {
          this.listVehicule = data;
        }
    )
  }


  ouvrirDialogueFormVehicule(vehicule: Vehicule | null) {
    if(vehicule == null){
      vehicule = {} as Vehicule
    }

    const dialogRef = this.dialog.open(DialogManageVehicule, {
      width: '250px',
      data: vehicule
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listerVehicule();
    });
  }

  ajouterVehicule() {
    this.ouvrirDialogueFormVehicule(null);
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



@Component({
  selector: 'dialog-manageVehicule',
  templateUrl: 'dialog-manageVehicule.html',
})
export class DialogManageVehicule {
  titreFormulaire: String = "Ajouter une nouvelle voiture";

  public boutonSubmitVehiculeDisabled:boolean = true;
  public valueButtonSubmit:String = "Ajouter";

  constructor(
      private vehiculeService: VehiculeService,
      public dialogRef: MatDialogRef<DialogManageVehicule>,
      @Inject(MAT_DIALOG_DATA) public data: Vehicule = {} as Vehicule) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  enableOrDisableButtonManageVehicule(){
    let vehicule = this.data;

    if(
        vehiculeContainsAllKey(vehicule) &&
        vehiculeContainsAllValues(vehicule)
    ){
      this.boutonSubmitVehiculeDisabled = false;
    }else{
      this.boutonSubmitVehiculeDisabled = true;
    }
  }

  manageVehicule(data: Vehicule) {
    let vehiculePeutEtreAjoute = true;

    if(data.id == 0){
      if(data.urlImg === null || data.urlImg === ""){
        vehiculePeutEtreAjoute = false;
      }
    }

    if(vehiculePeutEtreAjoute){
      let vehiculeCreated = {};

      this.vehiculeService.addVehicule(data).subscribe(
          data=>
          {
            vehiculeCreated = data;
          });

      if(vehiculeCreated != {}){
        this.dialogRef.close()
      }
    }
  }
}