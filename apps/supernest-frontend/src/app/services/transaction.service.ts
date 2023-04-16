import { Injectable } from '@angular/core';
import { AmountConverter } from '../utils/AmountConverter';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private static TransactionTypes: { [key: string]: string } = {
    AccountCreateContract: 'CREATE ACCOUNT',
    TransferContract: 'TRANSFER USDL',
    TransferAssetContract: 'TRANSFER LRC-10',
    VoteAssetContract: 'VoteAssetContract',
    VoteWitnessContract: 'VoteWitnessContract',
    WitnessCreateContract: 'CREATE GB',
    AssetIssueContract: 'CREATE LRC-10 Token',
    WitnessUpdateContract: 'UPDATE GB',
    AccountUpdateContract: 'UPDATE ACCOUNT',
    FreezeBalanceContract: 'FREEZE USDL',
    UnfreezeBalanceContract: 'UNFREEZE USDL',
    WithdrawBalanceContract: 'WITHDRAW REWARDS',
    UnfreezeAssetContract: 'UNFREEZE LRC-10',
    UpdateAssetContract: 'UPDATE LRC-10',
    ProposalCreateContract: 'CREATE PROPOSAL',
    ProposalApproveContract: 'ProposalApproveContract',
    ProposalDeleteContract: 'ProposalDeleteContract',
    SetAccountIdContract: 'SetAccountIdContract',
    CustomContract: 'CustomContract',
    CreateSmartContract: 'DEPLOY SMART CONTRACT',
    TriggerSmartContract: 'EXECUTE SMART CONTRACT',
    GetContract: 'GetContract',
    UpdateSettingContract: 'UpdateSettingContract',
    ExchangeCreateContract: 'UpdateSettingContract',
    ExchangeInjectContract: 'ExchangeInjectContract',
    ExchangeWithdrawContract: 'ExchangeWithdrawContract',
    ExchangeTransactionContract: 'ExchangeTransactionContract',
    UpdateKandyLimitContract: 'ExchangeTransactionContract',
    AccountPermissionUpdateContract: 'ExchangeTransactionContract',
    ClearABIContract: 'ClearABIContract',
    UpdateBrokerageContract: 'UpdateBrokerageContract',
    ShieldedTransferContract: 'ShieldedTransferContract',
    MarketSellAssetContract: 'MarketSellAssetContract',
    MarketCancelOrderContract: 'MarketCancelOrderContract',
    UNRECOGNIZED: 'UNRECOGNIZED',
  };

  constructor(private http: HttpClient) {}

  public loadPage(
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
    return this.http
      .get('https://indexer.legacy.chainmasters.ninja/transactions/' + address, { params: params })
      .pipe(map(TransactionService.mapPage));
  }

  public static mapPage(page: any) {
    if (page.transactions) {
      page.transactions = TransactionService.mapTransactions(page.transactions);
    }
    return page;
  }

  public static mapTransaction(transaction: any) {
    const t: any = { ...transaction };
    const transactionTypeText = TransactionService.TransactionTypes[t.type];
    if (transactionTypeText) t.typeText = transactionTypeText;
    else t.typeText = 'UNKNOWN <TODO> ⚠️';

    if (transaction.amount) {
      t.amount = AmountConverter.convertDecimal128(transaction.amount);
    }
    if (transaction.fee) {
      t.fee = AmountConverter.convertNumber(transaction.fee);
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
}
