import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vehicule} from "./Vehicule";
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "accept": "*/*",
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private vehiculesURL = "http://localhost:8080/api/v1/vehicles/"
  private vehiculesFilterByColorURL = "http://localhost:8080/api/v1/vehicles/color/"
  private vehiculesFilterByBrandURL = "http://localhost:8080/api/v1/vehicles/brand/"
  private addVehiculeURL = "http://localhost:8080/api/v1/vehicles/add"

  constructor(private httpclient: HttpClient) { }

  getVehicules(): Observable<Vehicule[]>{
    return this.httpclient.get<Vehicule[]>(this.vehiculesURL);
  }

  getVehiculesFilterByColor(color: any) {
    return this.httpclient.get<Vehicule[]>(this.vehiculesFilterByColorURL+color);
  }

  getVehiculesFilterByBrand(brand: String) {
    return this.httpclient.get<Vehicule[]>(this.vehiculesFilterByBrandURL+brand);
  }

  addVehicule(vehicule: Vehicule) {
    return this.httpclient.post<Vehicule>(this.addVehiculeURL, vehicule, httpOptions);
  }

  updateVehicule(vehicule: Vehicule) {
    return this.httpclient.put<Vehicule>(this.addVehiculeURL, vehicule, httpOptions);
  }
    
  delVehicule(licencePlate: string) {
    return this.httpclient.delete<Vehicule>(this.vehiculesURL + licencePlate);
  }
}
