import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: iniciando decolagem");
    }
    getCargo(): void {
        console.log("Helicóptero: passageiros embarcados, ligando hélices");
    }
    checkWind(): void {
        console.log("Helicóptero: ventos a 25km/h, situação OK");
    }

}