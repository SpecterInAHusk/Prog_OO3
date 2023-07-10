import IConsole from "./IConsole";

export default class SouljaGame implements IConsole {
	constructor() {
		console.log("Configurando plataforma SouljaGame");
		this.configureGame();
	}
	configureGame(): void {
		this.authToken();
		console.log("SouljaGame: configurando jogo");
	}
	authToken(): void {
		console.log("SouljaGame: autorizando token");
	}
}
