import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent {
  @Input()
  public transactionType: any;
  @Input()
  public transactionValue: any;
}
