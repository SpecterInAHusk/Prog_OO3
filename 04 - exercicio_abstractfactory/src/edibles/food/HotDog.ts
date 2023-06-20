import IFood from "./interfaces/IFood";

export default class HotDog implements IFood {
    getFood(): void {
        console.log("Dogão pronto para entrega");
    }

}