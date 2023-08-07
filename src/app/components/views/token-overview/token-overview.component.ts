import { Component } from '@angular/core';
import {SmartContractService} from "../../../services/smart-contract.service";
import {TokenService} from "../../../services/token.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-token-overview',
  templateUrl: './token-overview.component.html',
  styleUrls: ['./token-overview.component.css']
})
export class TokenOverviewComponent {
  public loading = true;
  public totalRecords = 0;
  public tokens: any[] = [];

  constructor(private tokenService: TokenService) {
  }

  public load(event: LazyLoadEvent) {
    this.loading = true;
    this.tokenService
      .loadPage(
        event.first as number,
        event.rows as number,
        event.sortField,
        event.sortOrder
      )
      .subscribe((page: any) => {
        this.tokens = page.tokens as [];
        this.totalRecords = page.totalRecords;
        this.loading = false;
      });
  }

}
