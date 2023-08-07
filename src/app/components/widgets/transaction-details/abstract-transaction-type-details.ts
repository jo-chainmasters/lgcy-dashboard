import {Component, Input} from "@angular/core";

@Component({template: ''})
export abstract class AbstractTransactionTypeDetails {
  @Input()
  public transaction: any;
}
