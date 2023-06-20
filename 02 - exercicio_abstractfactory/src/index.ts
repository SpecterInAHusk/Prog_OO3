import ITransportFactory from "./interfaces/ITransportFactory";
import UberFactory from "./factories/UberFactory";
import NineNineFactory from "./factories/NineNineFactory";
import Client from "./clients/Client";
import Company from "./consts/Company";
import AerialOrLand from "./consts/AerialOrLand";
import VehicleTypes from "./consts/VehicleTypes";
import * as promptSync from "prompt-sync";
import LimeFactory from "./factories/LimeFactory";

//TODO Desafio
//Parte 1: todas as companhias podem instanciar qualquer veículo
//FEITO: Parte 2: separar terrestre de aéreo (não instanciar ambos ao mesmo tempo)
//Parte 3: escolher veículo
//Dica: parâmetros nos métodos

//TODO adicionar companhia Lime, com veículo terrestre do tipo scooter, e
//aéreo do tipo drone

//Usar prompt para a escolha do usuário
const prompt = promptSync();

console.log("Escolha uma companhia entre UBER, NINENINE ou LIME.");
const companyChoice = prompt("Escolha a companhia desejada: ");
const currentCompany = Company[companyChoice];

//Escolher tipo de veículo
console.log("Escolha um tipo de veículo entre LAND ou AIR.");
const typeChoice = prompt("Escolha o tipo de veículo: ")
const currentType = AerialOrLand[typeChoice]

let factory!: ITransportFactory;
let vehicleChoice: any;

switch (currentCompany) {
    case Company.UBER:
        factory = new UberFactory;
        break;
    case Company.NINENINE:
        factory = new NineNineFactory;
        break;
    case Company.LIME:
        factory = new LimeFactory;
        break;
    default:
        console.log("Companhia não definida");
        break;
}

//if para escolher veículo de acordo com o tipo

switch (currentType) {
    case AerialOrLand.AIR:
        console.log("Escolha um tipo de veículo entre AIRPLANE, HELICOPTER ou DRONE.");
        vehicleChoice = prompt("Escolha o veículo:")
        break;
    
    case AerialOrLand.LAND:
        console.log("Escolha um tipo de veículo entre CAR, MOTORCYCLE ou SCOOTER.");
        vehicleChoice = prompt("Escolha o veículo:")
        break;

    default:
        break;
}
const currentVehicle = VehicleTypes[vehicleChoice];

const client = new Client(currentType, factory, currentVehicle);

client.startRoute();