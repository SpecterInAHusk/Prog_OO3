import Token from "../utils/Token";
import ITransport from "./ITransporadora";

export default class Transportadora implements ITransport {
	private token: Token;

	authToken(): Token {
		return new Token();
	}

	send(): void {
		this.token = this.authToken();
		console.log("TOKEN: " + this.token.token);
		console.log("Enviando via transportadora");
	}
	receive(): void {
		console.log("TOKEN: " + this.token.token);
		console.log("Recebendo via transportadora");
	}
}
