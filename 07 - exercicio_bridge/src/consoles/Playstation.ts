import IConsole from "./IConsole";

export default class Playstation implements IConsole {
	constructor() {
		console.log("Configurando plataforma Playstation");
		this.configureGame();
	}
	configureGame(): void {
		this.authToken();
		console.log("Playstation: configurando jogo");
	}
	authToken(): void {
		console.log("Playstation: autorizando token");
	}
}
