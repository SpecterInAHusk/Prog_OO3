import Transport from "./Location";
import Movie from "./products/Movie";
import Location from "./Location";
import Item from "./products/interface/Item";

export default class MovieLocation extends Location {

    protected createItem(): Item {
        return new Movie();
    }
}