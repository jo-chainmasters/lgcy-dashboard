import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import {NumberConverter} from "../utils/NumberConverter";
import {HttpService} from "./http.service";
import Big from "big.js";

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  // private static TransactionTypes: { [key: string]: string } = {
  //   AccountCreateContract: 'CREATE ACCOUNT',
  //   TransferContract: 'TRANSFER USDL',
  //   TransferAssetContract: 'TRANSFER LRC-10',
  //   VoteAssetContract: 'VoteAssetContract',
  //   VoteWitnessContract: 'VoteWitnessContract',
  //   WitnessCreateContract: 'CREATE GB',
  //   AssetIssueContract: 'CREATE LRC-10 Token',
  //   WitnessUpdateContract: 'UPDATE GB',
  //   AccountUpdateContract: 'UPDATE ACCOUNT',
  //   FreezeBalanceContract: 'FREEZE USDL',
  //   UnfreezeBalanceContract: 'UNFREEZE USDL',
  //   WithdrawBalanceContract: 'WITHDRAW REWARDS',
  //   UnfreezeAssetContract: 'UNFREEZE LRC-10',
  //   UpdateAssetContract: 'UPDATE LRC-10',
  //   ProposalCreateContract: 'CREATE PROPOSAL',
  //   ProposalApproveContract: 'ProposalApproveContract',
  //   ProposalDeleteContract: 'ProposalDeleteContract',
  //   SetAccountIdContract: 'SetAccountIdContract',
  //   CustomContract: 'CustomContract',
  //   CreateSmartContract: 'DEPLOY SMART CONTRACT',
  //   TriggerSmartContract: 'EXECUTE SMART CONTRACT',
  //   GetContract: 'GetContract',
  //   UpdateSettingContract: 'UpdateSettingContract',
  //   ExchangeCreateContract: 'UpdateSettingContract',
  //   ExchangeInjectContract: 'ExchangeInjectContract',
  //   ExchangeWithdrawContract: 'ExchangeWithdrawContract',
  //   ExchangeTransactionContract: 'ExchangeTransactionContract',
  //   UpdateKandyLimitContract: 'ExchangeTransactionContract',
  //   AccountPermissionUpdateContract: 'ExchangeTransactionContract',
  //   ClearABIContract: 'ClearABIContract',
  //   UpdateBrokerageContract: 'UpdateBrokerageContract',
  //   ShieldedTransferContract: 'ShieldedTransferContract',
  //   MarketSellAssetContract: 'MarketSellAssetContract',
  //   MarketCancelOrderContract: 'MarketCancelOrderContract',
  //   UNRECOGNIZED: 'UNRECOGNIZED',
  // };

  constructor(private httpService: HttpService) {}

  public loadPageByAddress(
    address: string,
    first: number,
    rows: number,
    sortField: string | undefined,
    sortOrder: number | undefined
  ) {
    if (!sortField) {
      sortField = 'timestamp';
    }
    const params: any = {
      first,
      rows,
      sortField,
      sortOrder,
    };
    return this.httpService
      .get('transactions/byAddress/' + address, { params: params })
      .pipe(map(TransactionService.mapPage));
  }

  public loadPage(
    first: number,
    rows: number,
    sortField: string | undefined,
    sortOrder: number | undefined,
    filters?: any,
  ) {
    if (!sortField) {
      sortField = 'timestamp';
    }

    const params: any = {
      first,
      rows,
      sortField,
      sortOrder,
    };

    if(filters) {
      for (let key of Object.keys(filters)) {
        const myKey = 'filter.' + filters[key].matchMode + '.' + key;
        params[myKey] = filters[key].value;
      }
    }

    return this.httpService
      .get('transactions/page', { params: params })
      .pipe(map(TransactionService.mapPage));
  }

  public static mapPage(page: any) {
    if (page.transactions) {
      page.transactions = TransactionService.mapTransactions(page.transactions);
    }
    return page;
  }

  public getByHash(hash: string) {
    return this.httpService
      .get('transactions/byHash/' + hash)
      .pipe(map(TransactionService.mapTransaction));
  }

  public static mapTransaction(transaction: any) {
    const t: any = { ...transaction };
    // const transactionTypeText = TransactionService.TransactionTypes[t.type];
    // if (transactionTypeText) t.typeText = transactionTypeText;
    // else t.typeText = 'UNKNOWN <TODO> ⚠️';

    if (transaction.amount) {
      t.amount = NumberConverter.toString(NumberConverter.toFixed(NumberConverter.bigDecimalToBig(transaction.amount)), 6);
    }
    if (transaction.fee) {
      t.fee = NumberConverter.toString(NumberConverter.toFixed(new Big(t.fee)));
    }
    if(transaction.contractCall?.paramValues) {
      if (Object.keys(transaction.contractCall?.paramValues).length > 0) {
        const paramValues = transaction.contractCall.paramValues as any;
        for (let key of Object.keys(paramValues)) {
          const value = paramValues[key];
          if (value instanceof Object) {
            paramValues[key] = Big(value.value);
          }
        }
      }
    }
    return t;
  }

  public static mapTransactions(transactions: any[]) {
    const trxs = [];
    if (transactions) {
      for (let transaction of transactions) {
        trxs.push(TransactionService.mapTransaction(transaction));
      }
    }
    return trxs;
  }

  public transformToKeyValue(transaction: any): {key: string, value: string}[] {

    const arr = [];
    arr.push({
      key: 'hash', value: transaction.hash
    });
    arr.push({
      key: 'blockNumber', value: transaction.blockNumber
    });
    arr.push({
      key: 'type', value: transaction.type
    });
    arr.push({
      key: 'status', value: 'TODO'
    });
    arr.push({
      key: 'time', value: transaction.timestamp
    });
    arr.push({
      key: 'sender', value: transaction.sender
    });
    return arr;
  }
}
