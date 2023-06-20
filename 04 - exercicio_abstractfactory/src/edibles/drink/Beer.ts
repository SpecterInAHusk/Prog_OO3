import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink {
    getDrink(): void {
        console.log("Cerveja pronta para entrega");
    }

}