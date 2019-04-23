import {Component, OnInit} from '@angular/core';
import {AccountTransactionsService} from '../shared/services/account-transactions.service';
import {Account} from '../shared/interfaces/account';

@Component({
  selector: 'app-bankomat',
  templateUrl: './bankomat.component.html',
  styleUrls: ['./bankomat.component.css']
})
export class BankomatComponent implements OnInit {

  private amount: number;
  private balance: number;
  private name: string;

  private withdrawal: number;
  private transferAmount: number;
  // Account props
  private account: Account;
  private account2: Account;


  constructor(private service: AccountTransactionsService) {
    this.viewAccount(this.service.customer);
    this.viewSkatteverket(this.service.customer2) ;
  }

  ngOnInit() {
    this.balance = this.service.customer.balance;
    this.name = this.service.customer.customerName;
  }

  depositMoney(amount: number) {
    this.service.deposit(this.service.customer, amount);
    this.balance = this.service.customer.balance;
  }

  viewAccount(account: Account) {
    this.account = account;
    return this.account;
  }

  viewSkatteverket(account: Account) {
    this.account2 = account;
    return this.account2;
  }

  withdraw(amount) {
    this.service.withdraw(this.service.customer, amount);
  }

  transfer(from: Account, to: Account, amount: number) {
    this.service.transfer(from, to, amount);
  }
}

