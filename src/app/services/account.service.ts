import { map } from 'rxjs';
import { TransactionService } from './transaction.service';
import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {NumberConverter} from "../utils/NumberConverter";
import Big from "big.js";

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private httpService: HttpService,
  ) {}

  public getAccount(address: string) {
    // @ts-ignore
    return this.httpService
      .get('account/' + address)
      .pipe(map(AccountService.mapAccount));
  }

  public static mapAccount(account: any) {
    if (account.transactions) {
      account.transactions = TransactionService.mapTransactions(
        account.transactions
      );
    }
    if(account.usdlBalance) {
      account.usdlBalance = NumberConverter.toFixed(NumberConverter.bigDecimalToBig(account.usdlBalance));
    }
    return account;
  }

  public static mapPage(page: any) {
    if (page.accounts) {
      page.accounts = AccountService.mapAccounts(page.accounts);
    }
    return page;
  }

  public static mapAccounts(accounts: any[]) {
    const acs = [];
    if (accounts) {
      for (let account of accounts) {
        acs.push(AccountService.mapAccount(account));
      }
    }
    return acs;
  }

  public loadPage(
    first: number,
    rows: number,
    sortField: string | undefined,
    sortOrder: number | undefined
  ) {
    if (!sortField) {
      sortField = 'usdlBalance';
    }
    const params: any = {
      first,
      rows,
      sortField,
      sortOrder,
    };
    return this.httpService
      .get('accounts/page/', {params: params})
      .pipe(map(AccountService.mapPage));
  }
}
