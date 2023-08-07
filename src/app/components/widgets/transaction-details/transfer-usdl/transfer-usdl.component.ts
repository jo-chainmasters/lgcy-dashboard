import {Component, Input} from '@angular/core';
import {AbstractTransactionTypeDetails} from "../abstract-transaction-type-details";

@Component({
  selector: 'app-transfer-usdl',
  templateUrl: './transfer-usdl.component.html',
  styleUrls: ['./transfer-usdl.component.css']
})
export class TransferUsdlComponent extends AbstractTransactionTypeDetails {

}
