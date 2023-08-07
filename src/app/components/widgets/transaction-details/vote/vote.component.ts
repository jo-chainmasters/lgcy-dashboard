import { Component } from '@angular/core';
import {AbstractTransactionTypeDetails} from "../abstract-transaction-type-details";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent extends AbstractTransactionTypeDetails {

}
