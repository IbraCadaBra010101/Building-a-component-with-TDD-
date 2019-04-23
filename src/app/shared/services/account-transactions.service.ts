import {Injectable} from '@angular/core';
import {Account} from '../interfaces/account';
import {Bankservice} from '../interfaces/bankservice';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionsService {
  customer: Account = {customerName: 'Oskar Olsson', balance: 5000};
  customer2: Account = {customerName: 'Skatteverkets Bank Giro', balance: 0};

  constructor() {
  }


  getBalance(account: Account): number {
    return account.balance;
  }

  deposit(account: Account, amount: number): void {
    if (amount < 100) {
      throw new Error(
        'Lowest amount permissible is 100 SEK'
      );

    }
    if (amount > 10000) {
      throw new Error(
        'Highest amount permissible is 10000'
      );
    }
    account.balance += amount;
  }

  withdraw(account: Account, amount: number): void {
    if (amount > account.balance) {
      throw new Error('Insufficient balance!');
    }
    if (amount < 100) {
      throw new Error(amount + ' is not a permissible withdrawal. Lowest permissible withdrawal is 100 SEK ');

    }

    account.balance -= amount;
  }

  transfer(from: Account, to: Account, amount: number): void {
    //credit balance with amount of the receiving account
    // make sure crediting account has enough balance
    if (from.balance >= amount && amount > 99) {
      to.balance += amount;
      from.balance -= amount;
    }
    if (amount < 100) {
      throw new Error(amount + ' is not permissible as it is a negative number');

    } else {
      throw new Error(amount + ' is not a permissible amount. Crediting account does not have sufficient balance');
    }
    // debit sending account of same amount
  }
}
