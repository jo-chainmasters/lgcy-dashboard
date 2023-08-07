import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SmartContractService} from "../../../services/smart-contract.service";
import {ChartData} from "chart.js";
import {LazyLoadEvent} from "primeng/api";
import {TransactionService} from "../../../services/transaction.service";
import {OverlayPanel} from "primeng/overlaypanel";
import {TransactionDetailsComponent} from "../../widgets/transaction-details/transaction-details.component";

@Component({
  selector: 'app-smart-contract-details',
  templateUrl: './smart-contract-details.component.html',
  styleUrls: ['./smart-contract-details.component.css']
})
export class SmartContractDetailsComponent implements OnInit {

  public loading = true;
  public totalRecords = 0;
  public transactions: any[] = [];

  @ViewChild('txDetailsPopup', {static: true})
  overlay: OverlayPanel | undefined;

  @ViewChild('txDetails', {static: true})
  txDetailsComponent: TransactionDetailsComponent | undefined;

  public chartData: any;
  public chartOptions: any;

  constructor(private route: ActivatedRoute, private smartContractService: SmartContractService, private transactionService: TransactionService) {
  }

  @Input()
  public contractAddress: any;
  public projection: any;

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const address = params.get('address');
        this.contractAddress = address as string;
        if (address)
          this.smartContractService.getDetailsProjection(address).subscribe((smartContractProjection: any) => {
            this.projection = smartContractProjection;
            this.mapData();
          });
      });
  }

  public load(event: LazyLoadEvent) {
    console.log(event);
    this.loading = true;
    this.transactionService
      .loadPage(
        event.first as number,
        event.rows as number,
        event.sortField,
        event.sortOrder,
        event.filters,
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

  private mapData() {
    if(!this.projection)
      return;

    const labels: string[] = [];
    const data: number[] = [];
    for (let cd of (this.projection.contract.transactionsAll as any[])) {
      labels.push(cd.k ? cd.k : 'Unknown');
      data.push(cd.v);
    }
    this.createChartData(labels, data);
  }

  private createChartData(labels: string[], values: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartData = {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.chartOptions = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

}
