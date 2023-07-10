import IConsole from "./IConsole";

export default class Xbox implements IConsole {
	constructor() {
		console.log("Configurando plataforma Xbox");
		this.configureGame();
	}
	configureGame(): void {
		this.authToken();
		console.log("Xbox: configurando jogo");
	}
	authToken(): void {
		console.log("Xbox: autorizando token");
	}
}
