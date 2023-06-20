import Airplane from "../vehicles/aerial/Airplane";
import Drone from "../vehicles/aerial/Drone";
import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import Motorcycle from "../vehicles/land/Motorcycle";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import VehicleTypes from "../consts/VehicleTypes";

export default class NineNineFactory implements ITransportFactory {

    createTransportVehicle(vehicleChoice : keyof typeof VehicleTypes): ILandVehicle {
        console.log("Transporte via 99");
        if (vehicleChoice === "CAR") {
            return new Car();
        } else if (vehicleChoice === "MOTORCYCLE") {
            return new Motorcycle();
        } else if (vehicleChoice === "SCOOTER") {
            return new Scooter();
        } else {
            throw new Error ("Escolha de veículo inválida")
        }
    }

    createTransportAircraft(vehicleChoice : keyof typeof VehicleTypes): IAircraft {
        console.log("Transporte via 99");
        if (vehicleChoice === "AIRPLANE") {
            return new Airplane();
        } else if (vehicleChoice === "HELICOPTER") {
            return new Helicopter();
        } else if (vehicleChoice === "DRONE") {
            return new Drone();
        } else {
            throw new Error ("Escolha de veículo inválida")
        }
    }

}
