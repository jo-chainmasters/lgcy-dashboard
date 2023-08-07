import { Component } from '@angular/core';
import {SmartContractService} from "../../../services/smart-contract.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-smart-contract-overview',
  templateUrl: './smart-contract-overview.component.html',
  styleUrls: ['./smart-contract-overview.component.css']
})
export class SmartContractOverviewComponent {
  public loading = true;
  public totalRecords = 0;
  public smartContracts: any[] = [];


  constructor(private smartContractService: SmartContractService) {
  }

  public load(event: LazyLoadEvent) {
    this.loading = true;
    this.smartContractService
      .loadPage(
        event.first as number,
        event.rows as number,
        event.sortField,
        event.sortOrder
      )
      .subscribe((page: any) => {
        this.smartContracts = page.smartContracts as [];
        this.totalRecords = page.totalRecords;
        this.loading = false;
      });
  }
}
