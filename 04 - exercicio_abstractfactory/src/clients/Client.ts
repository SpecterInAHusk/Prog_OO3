import IDrink from "../edibles/drink/interfaces/IDrink";
import IFood from "../edibles/food/interfaces/IFood";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";

export default class Client {
    private food: IFood;
    private drink: IDrink;

    constructor(factory: IDeliveryFactory){

        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery(): void {
        this.food.getFood();
        this.drink.getDrink();
    }
}