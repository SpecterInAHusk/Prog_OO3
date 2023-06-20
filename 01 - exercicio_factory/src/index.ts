import GameLocation from "./locations/GameLocation";
import MovieLocation from "./locations/MovieLocation";
import Location from "./locations/Location";

declare var process;

let location: Location;

if (process.argv.includes("--steam")) {
    location = new GameLocation();
}
else if (process.argv.includes("--netflix")) {
    location = new MovieLocation();
}
else {
    console.log("Selecione o tipo de locação.");
}

if (location){
    location.startItem();
}


