import IFood from "./interfaces/IFood";

export default class Hamburger implements IFood {
    getFood(): void {
        console.log("Hambúrguer pronto para entrega");
    }

}