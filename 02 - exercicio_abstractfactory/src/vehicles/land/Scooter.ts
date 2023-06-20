import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        console.log("Scooter: Iniciando trajeto");
        
    }
    getCargo(): void {
        console.log("Scooter: passageiros embarcados");
    }

}