import Item from "./interface/Item";

export default class Game implements Item {
    start(): void {
        this.getDescription();
        console.log("Iniciando jogo");
    }
    getDescription(): void {
        console.log("Descrição do jogo")
    }
}