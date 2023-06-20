import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink {
    getDrink(): void {
        console.log("Refrigerante pronto para entrega");
    }

}