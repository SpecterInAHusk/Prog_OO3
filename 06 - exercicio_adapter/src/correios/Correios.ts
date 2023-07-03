import ICorreios from "./ICorreios";
import Token from "../utils/Token";

export default class Correios implements ICorreios {
	private token: Token;

	authToken(): Token {
		return new Token();
	}

	sendCorreios(): void {
		this.token = this.authToken();
		console.log("TOKEN: " + this.token.token);
		console.log("Enviando via correio");
	}
	receiveCorreios(): void {
		console.log("TOKEN: " + this.token.token);
		console.log("Recebendo via correio");
	}
}
