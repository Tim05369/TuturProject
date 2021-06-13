import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Globals} from "../../globals";
import {Observable} from "rxjs";
import {Vehicule} from "../../interfaces/vehicules";

@Injectable({
  providedIn: 'root'
})
export class DetailsVehiculeService {
  private apiUrl = 'api/v1/vehicles'
  constructor(private http: HttpClient) { }

  getVehicule(licencePlate: String): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${Globals.API_URL}/${this.apiUrl}/${licencePlate}`);
  }

}
