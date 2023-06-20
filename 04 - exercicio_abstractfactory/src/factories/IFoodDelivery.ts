import IFood from "../edibles/food/interfaces/IFood";
import IDrink from "../edibles/drink/interfaces/IDrink";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import HotDog from "../edibles/food/HotDog";
import SoftDrink from "../edibles/drink/SoftDrink";

export default class IFoodDelivery implements IDeliveryFactory {

    createDeliveryFood():IFood {
        return new HotDog();
    }
    createDeliveryDrink():IDrink {
        return new SoftDrink();
    }
}
