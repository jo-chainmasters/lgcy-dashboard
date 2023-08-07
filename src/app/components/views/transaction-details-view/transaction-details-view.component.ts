import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {TransactionService} from "../../../services/transaction.service";

const LABEL_PREFIX = "transactionDetailsView"

@Component({
  selector: 'app-transaction-details-view',
  templateUrl: './transaction-details-view.component.html',
  styleUrls: ['./transaction-details-view.component.css']
})
export class TransactionDetailsViewComponent implements OnInit {

  public transaction: any;
  public keyValues: {key: string, value: string}[] = [];

  public labelPrefix = LABEL_PREFIX + '.';

  constructor(
    private activatedRoute: ActivatedRoute,
    private transactionService: TransactionService
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.loadTransaction(params.get('txId'));
    });
  }

  private loadTransaction(hash: string | null) {
    if(hash) {
      this.transactionService.getByHash(hash).subscribe(tx => {
        this.transaction = tx;
        this.keyValues = this.transactionService.transformToKeyValue(tx);
        console.log(tx);
      });
    }
  }
}
