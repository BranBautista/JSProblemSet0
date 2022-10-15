class BankCreator {
    clients = new Array();

    constructor() {
    }
  
    addClient(account, balance) {
        let obj = {};

        Object.defineProperty(obj, 'balance', {value: balance, enumerable: false, writable:true});
        obj.account = account;

        obj.add = function (num){
            return this.balance = this.balance + num;
        }
        obj.retrieve = function (num) {
            return this.balance = this.balance - num;
        }
        obj.getPrivateMessage = function() {
            return this.balance;
        }

        this.clients.push(obj)
    }

    getClientInfo() {
      return this.clients;
    }
}

class ClientCreator {

    persons = new Array();

    constructor() {
    }

    addPerson(account, cash) {
        let obj = {};

        Object.defineProperty(obj, 'cash', {value: cash, enumerable: false, writable:true});
        obj.account = account;

        obj.addTo = function (addAccount, money) {
            if (addAccount == this.account) {
                if (this.cash >= money) {
                    this.cash = this.cash - money;
                    return bank.clients[addAccount-1].add(money);
                }
                else {
                    throw new Error ("You do not have enough money.");
                }
            }
            else {
                if (this.cash >= money) {
                    this.cash = this.cash - money;
                    for (let i = 0; i < bank.clients.length; i++){
                        console.log(bank.clients[i].account)
                        if (bank.clients[i].account == addAccount) {
                            return bank.clients[i].add(money);
                        }
                    }
                }
                else {
                    throw new Error ("You do not have enough money.");
                }
            }
        }

        obj.retrieveMe = function (retrieveAccount, money) {
            if (retrieveAccount == this.account) {
                if (bank.clients[retrieveAccount].getPrivateMessage() >= money) {
                    this.cash = this.cash + money;
                    return bank.clients[retrieveAccount-1].retrieve(money);

                }
            }
            else {
                throw new Error ("This is not your account.");
            }
        }

        obj.consultBalance = function (consultAccount) {
            if (consultAccount == this.account) {
                return bank.clients[consultAccount].getPrivateMessage();
            }
            else{
                throw new Error ("This is not your account.");
            }
        }
        this.persons.push(obj);
    }

}

//The bank will have 10 clients
let numClients = 10

//Here I create the two instances
let bank = new BankCreator()
let clients = new ClientCreator()

for (let i = 1; i <= numClients; i++){
    bank.addClient(i,500) //add the number of clients and the bank gives them a start bonus of 500 pesos
    clients.addPerson(i,500) //add the number of persons who, lets suppose, have 500 pesos in cash
}

//Person with account1 wants to add money to its bank account (account: 1)
// console.log(clients.persons[0].addTo(1,20))
// console.log(bank.clients[0].balance)
// console.log(clients.persons[0].cash)

//Person with account1 wants to add money to the bank account of person 3(account: 3)
// console.log(clients.persons[0].addTo(3,20))
// console.log(bank.clients[2].balance)
// console.log(clients.persons[0].cash)

//Person with account1 wants to retrieve money from its bank account (account: 1)
//  console.log(clients.persons[0].retrieveMe(1,20))
//  console.log(bank.clients[0].balance)
//  console.log(clients.persons[0].cash)

//Person with account1 tries to retrieve money from the bank account of person 4 (account: 4)
//  console.log(clients.persons[0].retrieveMe(4,20))
//  console.log(bank.clients[0].balance)
//  console.log(clients.persons[0].cash)

//Person with account1 wants to see its balance from its bank account (account: 1)
// console.log(clients.persons[0].consultBalance(1))

//Person with account1 tries to see the balance from account of person 7 (account: 7)
//console.log(clients.persons[0].consultBalance(7))
