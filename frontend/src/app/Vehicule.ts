export interface Vehicule {
    id: number;
    brand: string;
    model: string;
    color: string;
    horsePower : number;
    rentalPrice: number;
    kmPrice: number;
    urlImg: string;
    licencePlate: string
}

export function vehiculeContainsAllKey(vehicule: Vehicule) {
    return "brand" in vehicule &&
        "color" in vehicule &&
        "horsePower" in vehicule &&
        "kmPrice" in vehicule &&
        "licencePlate" in vehicule &&
        "model" in vehicule &&
        "rentalPrice" in vehicule &&
        "urlImg" in vehicule;
}

export function vehiculeContainsAllValues(vehicule: Vehicule){
    return vehicule.rentalPrice === null ||
        vehicule.licencePlate === null || vehicule.licencePlate === "" ||
        vehicule.kmPrice === null ||
        vehicule.model === null || vehicule.model === "" ||
        vehicule.color === null || vehicule.color === "" ||
        vehicule.brand === null || vehicule.brand === "" ||
        vehicule.horsePower === null ||
        vehicule.urlImg === null || vehicule.urlImg === "";
}