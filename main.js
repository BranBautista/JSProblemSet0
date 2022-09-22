// *************************************** //
// *****  JavaScript Problem Set #0  ***** //
// *************************************** //

// ----------------------------- //
// ******-- Chapter 05 --****** //
// ----------------------------- //

// ******-- Exercise 01 --****** //

//Here I make a class to create accounts. This is going to be manage by the bank
class AccountCreator {
    #balance; //Here I private the balance

    constructor(account, balance) {
        this.account = account;
        this.#balance = balance;
    }

    add(num) {
        return this.#balance = this.#balance + num;
    }
    retrieve(num) {
        return this.#balance = this.#balance - num;
    }
    getPrivateMessage() {
        return this.#balance;
    }
}

class ClientCreator {
    constructor(account, cash) {
        this.account = account;
        this.cash = cash;
    }

    addTo(addAccount, money) {
        if (addAccount == this.account) {
            if (this.cash >= money) {
                this.cash = this.cash - money;
                for (let i = 1; i <= arrClients.length; i++) {
                    if (objBank[i].account == addAccount) {
                        return objBank[i].add(money);
                    }
                }
            }
            else {
                return "You do not have enough money";
            }
        }
        else {
            for (let i = 1; i <= arrClients.length; i++) {
                if (objBank[i].account == this.account) {
                    if (objBank[i].getPrivateMessage() >= money) {
                        objBank[i].retrieve(money);
                        for (let j = 1; j <= arrClients.length; j++) {
                            if (objBank[j].account == addAccount) {
                                return objBank[j].add(money);
                            }
                        }
                        break; //******** */
                    }
                    else {
                        return "You do not have enough money."
                    }
                }
            }
        }
    }
    retrieveMe(retrieveAccount, money) {
        if (retrieveAccount == this.account) {
            for (let i = 1; i <= arrClients.length; i++) {
                if (objBank[i].account == this.account) {
                    if (objBank[i].getPrivateMessage() >= money) {
                        this.cash = this.cash + money;
                        for (let j = 1; j <= arrClients.length; j++) {
                            if (objBank[j].account == this.account) {
                                return objBank[j].retrieve(money);
                            }
                        }
                    }
                }
            }
        }
        else {
            return "This is not your account."
        }
    }
    consultBalance() {
        if (retrieveAccount == this.account) {
            for (let i = 1; i <= arrClients.length; i++) {
                if (objBank[i].account == this.account) {
                    return objBank[i].getPrivateMessage();
                }
            }
        }
        else{
            return "This is not your account."
        }
    }
}

//This function will create the number of clients
function Clients(number) {
    let arrayClients = [];
    for (let i = 1; i <= number; i++) {
        arrayClients.push('client' + i);
    }
    return arrayClients;
}


//This function will create the banks clients
function bankClientsCreator(array) {
    let bankClients = {};
    for (let i = 0; i < array.length; i++) {
        bankClients[i + 1] = new AccountCreator(i + 1, 500); // The number of client is the number of his account
    }
    return bankClients;
}

function clientsInfo(array) {
    let clients = {};
    for (let i = 0; i < array.length; i++) {
        clients[i + 1] = new ClientCreator(i + 1, 300);  //We supposed all of the clients has $300 dollars cash 
    }
    return clients;
}

//We have 4 clients
let arrClients = Clients(4);

//Create the object manage by the bank with all the balance.
const objBank = bankClientsCreator(arrClients);

//Create the object with the clients, their account and their cash.
const objClients = clientsInfo(arrClients);

console.log(objBank);
console.log(objClients);


// ******-- Exercise 02 --****** //


function randomNumS(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

arrayNames = ['Carlos', 'Alejandro', 'Gabriela', 'Juan', 'Andrés', 'Ana', 'Eva', 'Nora', 'Sara', 'Raúl', 'Helena', 'Ulisas', 'Álvaro', 'Alba', 'Lucas', 'Manuel', 'Mariana','Isabel', 'Marta', 'Raquel', 'Samuel', 'Alberto']

const floors = 8;
const rooms = 5;
const personsNum = floors * rooms;

//const arrayBuildingF = [];

function equipment() {
    let numberOfEquipment = 9;
    const arrayBuildingF = []

    for (let i = 0; i < floors; i++) { //floor
        arrayBuildingF[i] = [];
        for (let j = 0; j < rooms; j++) { //room
            arrayBuildingF[i][j] = `e${randomNumS(9)+1}`
        }
    }
    return arrayBuildingF
}

const arrayBuilding = [];

function persons() {
    let numMax = 2;
    let numMin = 1;
    let indexName;

    for (let i = 0; i < floors; i++) { //floor
        arrayBuilding[i] = new Array(rooms);
        for ( let j = 0; j < rooms; j++){
            if (randomNumS(10)==4){
                indexName= randomNumS(arrayNames.length);
                arrayBuilding[i][j] = `${arrayNames[indexName]} ${arrayEquipment[i][j]}`
                numMax = numMax + 1
                numMin = numMin + 1
            }
            else{
                indexName= randomNumS(arrayNames.length);
                arrayBuilding[i][j] = `${arrayNames[indexName]}`
                numMax = numMax + 1
                numMin = numMin + 1
            }
        }
    }
    return arrayBuilding
}

function algorithmSearh(string){
    let equipmentNumber = string[string.length-1];
    let helpStringP;
    let helpStringE;
    let helpIndex;
    let numberOfItems=0;
    let arrayLocations=[];
    if (string[0] === 'e'){
        console.log('You are searching for an equipment');
        for (let i = 0; i < floors; i++){
            for(let j = 0; j < rooms; j++){
                helpStringP = arrayPersons[i][j];
                helpStringE = arrayEquipment[i][j];
                helpIndex = helpStringP.indexOf(' ');
                if (helpIndex !== -1){
                    if (helpStringP[helpStringP.length-1]== equipmentNumber){
                        numberOfItems = numberOfItems + 1;
                        arrayLocations.push(` Floor: ${i+1}; room: ${j+1} and person: ${helpStringP.replace(string,'')}`);
                    }
                }
                else{
                    if (helpStringE[helpStringE.length-1]== equipmentNumber){
                        numberOfItems = numberOfItems + 1;
                        arrayLocations.push(` Floor: ${i+1}; room: ${j+1}`);
                    }
                }
            }
        }
        return `There are ${numberOfItems} items and are found in ${arrayLocations}`
    }
    else{
        console.log('You are searching for a person');
        for (let i = 0; i < floors; i++){
            for(let j = 0; j < rooms; j++){
                if (arrayPersons[i][j] == string){
                    numberOfItems = numberOfItems + 1;
                    arrayLocations.push(` Floor: ${i+1}; room: ${j+1}`);
                }
            }
        }
        return `There are ${numberOfItems} persons on the building with the name ${string} and are found in ${arrayLocations}`
    }
}


const arrayEquipment = equipment();
console.log(arrayEquipment);
const arrayPersons = persons();
console.log(arrayPersons);

console.log(algorithmSearh('e1'));
console.log(algorithmSearh('Nora'))