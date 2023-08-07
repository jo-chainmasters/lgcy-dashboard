import {Component, ViewChild} from '@angular/core';
import {TransactionService} from "../../../services/transaction.service";
import {LazyLoadEvent} from "primeng/api";
import {OverlayPanel} from "primeng/overlaypanel";
import {TransactionDetailsComponent} from "../../widgets/transaction-details/transaction-details.component";

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent {

  @ViewChild('txDetailsPopup', {static: true})
  overlay: OverlayPanel | undefined;

  @ViewChild('txDetails', {static: true})
  txDetailsComponent: TransactionDetailsComponent | undefined;

  public loading = true;
  public totalRecords = 0;
  public transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  public load(event: LazyLoadEvent) {
    this.loading = true;
    this.transactionService
      .loadPage(
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

  public showTransactionDetailsPopup(tx: any, event: Event) {
    if(this.overlay) {
      // @ts-ignore
      this.txDetailsComponent.tx =  tx;
      this.overlay.show(event, event.target);
    }
  }

  public hideTransactionDetailsPopup() {
    if(this.overlay)
      this.overlay.hide();
  }
}
