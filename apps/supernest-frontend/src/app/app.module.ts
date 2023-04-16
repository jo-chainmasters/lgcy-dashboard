import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { CutDotPipe } from './pipes/cut-dot.pipe';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SkeletonModule} from "primeng/skeleton";
import {ChartModule} from "primeng/chart";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    AccountDetailsComponent,
    TransactionHistoryComponent,
    TransactionDetailsComponent,
    CutDotPipe,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    TableModule,
    OverlayPanelModule,
    ButtonModule,
    CardModule,
    TooltipModule,
    SkeletonModule,
    ChartModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
