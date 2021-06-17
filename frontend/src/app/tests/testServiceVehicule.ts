// Straight Jasmine testing without Angular's testing support
import {VehiculeService} from "../services/vehicule.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";

describe('VehiculeService', () => {
    let service: VehiculeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [VehiculeService]
        });
        service = TestBed.get(VehiculeService);
    });

    it('#addVehicule create a vehicule', () => {
        let vehiculeToCreate = {
            id: 0,
            brand: "Lanborghini",
            model: "Aventador LP700-4",
            color: "Orange",
            horsePower : 375,
            rentalPrice: 1000000,
            kmPrice: 50000,
            urlImg: "https://www.alainclass.com/wp-content/uploads/2020/06/2013-Lamborghini-Aventador-LP-700-4-GREY-1613-3.jpg",
            licencePlate: "XX-XXX-XX"
        }
        let vehiculeCreated = {}

        service.addVehicule(vehiculeToCreate).subscribe(
            data=>
            {
                vehiculeCreated = data;
            });

        expect(vehiculeCreated).toEqual(vehiculeToCreate)
    })
});