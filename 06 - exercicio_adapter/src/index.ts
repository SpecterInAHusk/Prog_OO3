import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Transportadora from "./transportadora/Transportadora";
import Correios from "./correios/Correios";
import ICorreios from "./correios/ICorreios";

const delivery: ICorreios = new TransportadoraAdapter(new Transportadora());
//const payment: IPayoneerPayment = new Payoneer();
delivery.sendCorreios();
delivery.receiveCorreios();
