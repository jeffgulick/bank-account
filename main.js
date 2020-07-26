`use strict`
//bank account class. template for account object creation
class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumberm = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    //adds the balance after deposits and charges
    balance(){
       const currentBal = this.transactions.reduce((total, transacts) => total += transacts);
       return currentBal;
    }
    deposit(amount){
        if(amount > 0){
            amount = this.transactions.push(amount);
        } else {
            console.log(`${amount} is a negative amount. Please change to enter deposit.`);
        }
    }
    charge(amount){
        if(amount < this.balance()){
            amount = this.transactions.push(-amount);
        } else {
            console.log(`Cannot process transaction. The charge amount of ${amount}, is greater than the available account balance.`)
        }
    }
}

class Transaction {
    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
    exchange(amount, payee){
        if(amount > 0){
        
        }
        if(amount < 0){
            
        }
        
    }

}
//created object with above class
const jeffsAccount = new BankAccount('123456', 'Jeff Gulick');
const jeffsTrans = new Transaction('22.55', 'Jeff');
console.log(jeffsTrans)
//test transactions
jeffsAccount.deposit(200.99);
jeffsAccount.deposit(300.51);
jeffsAccount.deposit(300.22);
jeffsAccount.deposit(200);
jeffsAccount.charge(22.50);
jeffsAccount.charge(400)
jeffsAccount.charge(480)
jeffsAccount.charge(99)




console.log(jeffsAccount.transactions);
console.log(jeffsAccount.balance())
console.log(`Current Balance: $${jeffsAccount.balance()}`)