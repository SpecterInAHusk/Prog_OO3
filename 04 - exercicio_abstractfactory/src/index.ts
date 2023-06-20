import IDeliveryFactory from "./factories/interfaces/IDeliveryFactory";
import Company from "./consts/Company";
import IFoodDelivery from "./factories/IFoodDelivery";
import AiqFomeDelivery from "./factories/AiqFomeDelivery";
import Client from "./clients/Client";

const currentCompany = Company.AIQFOME;
let factory! : IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME : 
        factory = new AiqFomeDelivery();
        break;
    case Company.IFOOD : 
        factory = new IFoodDelivery();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Client(factory);
client.startDelivery();