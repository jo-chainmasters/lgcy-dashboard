import { Component } from '@angular/core';
import {AbstractTransactionTypeDetails} from "../abstract-transaction-type-details";

@Component({
  selector: 'app-create-smart-contract',
  templateUrl: './create-smart-contract.component.html',
  styleUrls: ['./create-smart-contract.component.css']
})
export class CreateSmartContractComponent extends AbstractTransactionTypeDetails {

}
