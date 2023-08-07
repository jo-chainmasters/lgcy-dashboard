import { Component } from '@angular/core';
import {SmartContractService} from "../../../services/smart-contract.service";
import {AccountService} from "../../../services/account.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-holder-list',
  templateUrl: './holder-list.component.html',
  styleUrls: ['./holder-list.component.css']
})
export class HolderListComponent {
  public loading = true;
  public totalRecords = 0;
  public accounts: any[] = [];

  constructor(private accountService: AccountService) {
  }

  public load(event: LazyLoadEvent) {
    this.loading = true;
    this.accountService
      .loadPage(
        event.first as number,
        event.rows as number,
        event.sortField,
        event.sortOrder
      )
      .subscribe((page: any) => {
        this.accounts = page.accounts as [];
        this.totalRecords = page.totalRecords;
        this.loading = false;
      });
  }
}
