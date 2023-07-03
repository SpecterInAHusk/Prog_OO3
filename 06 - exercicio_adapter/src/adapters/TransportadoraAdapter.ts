import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";
import ICorreios from "../correios/ICorreios";

export default class TransportadoraAdapter implements ICorreios {
	private token: Token;

	constructor(private transportadora: Transportadora) {
		console.log("Adaptando Payoneer no Paypal");
	}

	authToken(): Token {
		return new Token();
	}
	sendCorreios(): void {
		return this.transportadora.send();
	}
	receiveCorreios(): void {
		return this.transportadora.receive();
	}
}
