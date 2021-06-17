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

  editerVehicule(vehicule: Vehicule) {
    this.ouvrirDialogueFormVehicule(vehicule);
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
  public licencePlateDisabled: boolean = false;
  public valueButtonSubmit:String = "Ajouter";

  constructor(
      private vehiculeService: VehiculeService,
      public dialogRef: MatDialogRef<DialogManageVehicule>,
      @Inject(MAT_DIALOG_DATA) public data: Vehicule = {} as Vehicule) {
    if(Object.keys(data).length > 0 && "id" in data){
      this.titreFormulaire = "Modifier une voiture";
      this.valueButtonSubmit = "Modifier"
      this.boutonSubmitVehiculeDisabled = false;
      this.licencePlateDisabled = true;
    }
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

  updateVehicule(data: Vehicule) {
    let vehiculeCreated = {};
    this.vehiculeService.updateVehicule(data).subscribe(data => {
      vehiculeCreated = data
    });

    if (vehiculeCreated != {}) {
      this.dialogRef.close()
    }
  }

  manageVehicule(data: Vehicule) {

    if ("id" in data) {
      this.updateVehicule(data);
    } else {
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