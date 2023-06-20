import IDrink from "../../edibles/drink/interfaces/IDrink";
import IFood from "../../edibles/food/interfaces/IFood";

export default interface IDeliveryFactory {
    createDeliveryFood():IFood;
    createDeliveryDrink():IDrink;
}
