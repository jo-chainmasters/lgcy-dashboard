import { Component, Input } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent {
  public loading = true;
  public totalRecords = 0;
  public transactions: any[] = [];
  @Input()
  public address: string | undefined = undefined;

  constructor(private transactionService: TransactionService) {}

  public load(event: LazyLoadEvent) {
    console.log(event);
    this.loading = true;
    this.transactionService
      .loadPageByAddress(
        this.address as string,
        event.first as number,
        event.rows as number,
        event.sortField,
        event.sortOrder
      )
      .subscribe((page: any) => {
        this.transactions = page.transactions as [];
        this.totalRecords = page.totalRecords;
        this.loading = false;
      });
  }

  protected readonly Number = Number;
  protected readonly undefined = undefined;
}
