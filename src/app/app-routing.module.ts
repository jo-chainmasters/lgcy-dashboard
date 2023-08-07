import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/views/dashboard/dashboard.component";
import {AccountDetailsComponent} from "./components/views/account-details/account-details.component";
import {
  TransactionDetailsViewComponent
} from "./components/views/transaction-details-view/transaction-details-view.component";
import {
  SmartContractOverviewComponent
} from "./components/widgets/smart-contract-overview/smart-contract-overview.component";
import * as path from "path";
import {
  SmartContractDetailsComponent
} from "./components/views/smart-contract-details/smart-contract-details.component";
import {HolderListComponent} from "./components/views/holder-list/holder-list.component";
import {TransactionOverviewComponent} from "./components/views/transaction-overview/transaction-overview.component";
import {TokenOverviewComponent} from "./components/views/token-overview/token-overview.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'account',
    children: [
      {
        path: ':address',
        component: AccountDetailsComponent,
      },
    ],
  },
  {
    path: 'accounts',
    component: HolderListComponent,
  },
  {
    path: 'contract',
    children: [
      {
        path: ':address',
        component: SmartContractDetailsComponent,
      }
    ]
  },
  {
    path: 'token',
    children: [
      {
        path: 'page',
        component: TokenOverviewComponent
      }
    ]
  },
  {
    path: 'transaction',
    children: [
      {
        path: 'page',
        component: TransactionOverviewComponent,
      },
      {
        path: ':txId',
        component: TransactionDetailsViewComponent
      }
    ]
  },
  {
    path: 'smartContracts',
    component: SmartContractOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
