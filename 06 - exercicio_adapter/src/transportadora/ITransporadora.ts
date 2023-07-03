import Token from "../utils/Token";

export default interface ITransport {
	authToken(): Token;
	send(): void;
	receive(): void;
}
