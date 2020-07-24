`use strict`
//bank account class. template for account object creation
class BankAccount {
    constructor(accountNumber, owner, transactions){
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
//created object with above class
const jeffsAccount = new BankAccount('123456', 'Jeff Gulick');
//test transactions
jeffsAccount.deposit(200.99);
jeffsAccount.deposit(300.51);
jeffsAccount.deposit(300.22);
jeffsAccount.deposit(200);
jeffsAccount.charge(22.50);
jeffsAccount.charge(400)
jeffsAccount.charge(580)


console.log(jeffsAccount.transactions);
console.log(jeffsAccount.balance())
console.log(`Current Balance: $${jeffsAccount.balance()}`)