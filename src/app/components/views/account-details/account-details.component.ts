import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {AccountService} from "../../../services/account.service";
import {NumberConverter} from "../../../utils/NumberConverter";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  public address: string | undefined = undefined;
  public account: any;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const address = params.get('address');
      this.address = address as string;
      if (address)
        this.accountService.getAccount(address).subscribe((account: any) => {
          this.account = account;
        });
    });
  }

    protected readonly undefined = undefined;
  protected readonly NumberConverter = NumberConverter;
}
