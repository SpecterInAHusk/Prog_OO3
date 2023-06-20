import Item from "./interface/Item";

export default class Movie implements Item{
    start(): void {
        this.getDescription();
        console.log("Iniciando filme");
    }
    getDescription(): void {
        console.log("Descrição do filme")
    }
}