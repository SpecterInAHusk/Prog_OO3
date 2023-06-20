import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import AerialOrLand from "../consts/AerialOrLand";
import VehicleTypes from "../consts/VehicleTypes";

export default class Client {
    private vehicle: ILandVehicle;
    private aircraft: IAircraft
    //USAR PROMPT E A CONST DE TIPOS DE VEÍCULO
    //USAR ENUM
    //enum VehicleType {
/*   LAND = "LAND",
  AIR = "AIR",
}

enum TypeOption {
  TYPE1 = "TYPE1",
  TYPE2 = "TYPE2",
} */

    constructor(typeChoice: keyof typeof AerialOrLand, factory:ITransportFactory, vehicleChoice: keyof typeof VehicleTypes) {
        //separar terrestre e aéreo com type e escolher veículo
        this.chooseVehicle(typeChoice, factory, vehicleChoice);
    }

    startRoute() {
        if (this.vehicle) {
            this.vehicle.startRoute();
        } else if (this.aircraft){
            this.aircraft.startRoute();
        } else {
            throw new Error("Tipo inválido, veículo não instanciado");
        }
    }

    chooseVehicle(typeChoice: keyof typeof AerialOrLand, factory:ITransportFactory, vehicleChoice: keyof typeof VehicleTypes) {
        if (typeChoice === "LAND") {
            if (vehicleChoice === "CAR") {
                this.vehicle = factory.createTransportVehicle("CAR");
            }

            else if (vehicleChoice === "MOTORCYCLE") {
                this.vehicle = factory.createTransportVehicle("MOTORCYCLE");
            }
            
            else if (vehicleChoice === "SCOOTER") {
                this.vehicle = factory.createTransportVehicle("SCOOTER");
            } 
        }

        else if (typeChoice === "AIR") {
            if (vehicleChoice === "AIRPLANE") {
                this.vehicle = factory.createTransportAircraft("AIRPLANE");
            }

            else if (vehicleChoice ==="HELICOPTER") {
                this.vehicle = factory.createTransportAircraft("HELICOPTER");
            }
            
            else if (vehicleChoice === "DRONE") {
                    this.vehicle = factory.createTransportAircraft("DRONE");
            } 
        } else {
            throw new Error("Tipo de veículo inválido");
        }
    }
}
