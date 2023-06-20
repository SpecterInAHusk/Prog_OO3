import IFood from "../edibles/food/interfaces/IFood";
import IDrink from "../edibles/drink/interfaces/IDrink";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import Hamburger from "../edibles/food/Hamburger";
import Beer from "../edibles/drink/Beer";

export default class AiqFomeDelivery implements IDeliveryFactory {

    createDeliveryFood():IFood {
        return new Hamburger();
    }
    createDeliveryDrink():IDrink {
        return new Beer();
    }
}
