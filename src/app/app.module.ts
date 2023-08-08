import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SearchBoxComponent} from "./components/widgets/search-box/search-box.component";
import {DashboardComponent} from "./components/views/dashboard/dashboard.component";
import {AccountDetailsComponent} from "./components/views/account-details/account-details.component";
import {TransactionDetailsComponent} from "./components/widgets/transaction-details/transaction-details.component";
import {TransactionHistoryComponent} from "./components/widgets/transaction-history/transaction-history.component";
import {TableModule} from "primeng/table";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CutDotPipe} from "./pipes/cut-dot.pipe";
import {SkeletonModule} from "primeng/skeleton";
import {DropdownModule} from "primeng/dropdown";
import {ChartModule} from "primeng/chart";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { TransactionDetailsViewComponent } from './components/views/transaction-details-view/transaction-details-view.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { TransferUsdlComponent } from './components/widgets/transaction-details/transfer-usdl/transfer-usdl.component';
import { TriggerSmartContractComponent } from './components/widgets/transaction-details/trigger-smart-contract/trigger-smart-contract.component';
import { CreateSmartContractComponent } from './components/widgets/transaction-details/create-smart-contract/create-smart-contract.component';
import { FreezeUsdlComponent } from './components/widgets/transaction-details/freeze-usdl/freeze-usdl.component';
import { UnfreezeUsdlComponent } from './components/widgets/transaction-details/unfreeze-usdl/unfreeze-usdl.component';
import { VoteComponent } from './components/widgets/transaction-details/vote/vote.component';
import { CreateGbComponent } from './components/widgets/transaction-details/create-gb/create-gb.component';
import {MenubarModule} from "primeng/menubar";
import { MenuBarComponent } from './components/widgets/menu-bar/menu-bar.component';
import { SmartContractOverviewComponent } from './components/widgets/smart-contract-overview/smart-contract-overview.component';
import { SmartContractDetailsComponent } from './components/views/smart-contract-details/smart-contract-details.component';
import {TabViewModule} from "primeng/tabview";
import { HolderListComponent } from './components/views/holder-list/holder-list.component';
import { TransactionOverviewComponent } from './components/views/transaction-overview/transaction-overview.component';
import {BigToHumanPipe} from "./pipes/big-to-human.pipe";
import { StringToHumanPipe } from './pipes/string-to-human.pipe';
import { TokenOverviewComponent } from './components/views/token-overview/token-overview.component';
import {TagModule} from "primeng/tag";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    DashboardComponent,
    AccountDetailsComponent,
    TransactionDetailsComponent,
    TransactionHistoryComponent,
    CutDotPipe,
    TransactionDetailsViewComponent,
    TransferUsdlComponent,
    TriggerSmartContractComponent,
    CreateSmartContractComponent,
    FreezeUsdlComponent,
    UnfreezeUsdlComponent,
    VoteComponent,
    CreateGbComponent,
    MenuBarComponent,
    SmartContractOverviewComponent,
    SmartContractDetailsComponent,
    HolderListComponent,
    TransactionOverviewComponent,
    BigToHumanPipe,
    StringToHumanPipe,
    TokenOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TableModule,
    OverlayPanelModule,
    SkeletonModule,
    DropdownModule,
    ChartModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TabViewModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
