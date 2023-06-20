import IAircraft from "../../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicle";

export default interface ITransportFactory {
    createTransportVehicle(vehicleChoice: string):ILandVehicle;
    createTransportAircraft(vehicleChoice: string):IAircraft;
}
