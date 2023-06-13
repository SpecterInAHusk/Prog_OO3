import Transport from "./Location";
import Game from "./products/Game";
import Location from "./Location";
import Item from "./products/interface/Item";

export default class GameLocation extends Location {
    
    protected createItem(): Item {
        return new Game();
    }
}