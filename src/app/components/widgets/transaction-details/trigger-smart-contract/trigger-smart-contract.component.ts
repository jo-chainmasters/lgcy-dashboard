import { Component } from '@angular/core';
import {AbstractTransactionTypeDetails} from "../abstract-transaction-type-details";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-trigger-smart-contract',
  templateUrl: './trigger-smart-contract.component.html',
  styleUrls: ['./trigger-smart-contract.component.css']
})
export class TriggerSmartContractComponent extends AbstractTransactionTypeDetails {

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
