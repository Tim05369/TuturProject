import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vehicule} from "./Vehicule";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private vehiculesURL = "http://localhost:8080/api/v1/vehicles"
  private vehiculesFilterByColorURL = "http://localhost:8080/api/v1/vehicles/color/"

  constructor(private httpclient: HttpClient) { }

  getVehicules(): Observable<Vehicule[]>{
    return this.httpclient.get<Vehicule[]>(this.vehiculesURL);
  }

  getVehiculesFilterByColor(color: any) {
    return this.httpclient.get<Vehicule[]>(this.vehiculesFilterByColorURL+color);
  }
}
