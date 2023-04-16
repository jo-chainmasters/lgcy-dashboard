import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private http: HttpClient,
    private transactionService: TransactionService
  ) {}

  public getAccount(address: string) {
    // @ts-ignore
    return this.http
      .get('https://indexer.legacy.chainmasters.ninja/account/' + address)
      .pipe(map(AccountService.mapAccount));
  }

  public static mapAccount(account: any) {
    if (account.transactions) {
      account.transactions = TransactionService.mapTransactions(
        account.transactions
      );
    }
    return account;
  }
}
