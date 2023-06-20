import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando decolagem");
    }
    getCargo(): void {
        console.log("Drone: pacote obtido");
    }
    checkWind(): void {
        console.log("Drone: ventos a 25km/h, situação OK");
    }

}