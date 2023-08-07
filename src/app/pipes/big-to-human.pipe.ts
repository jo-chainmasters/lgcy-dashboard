import { Pipe, PipeTransform } from '@angular/core';
import {NumberConverter} from "../utils/NumberConverter";
import Big from "big.js";

@Pipe({
  name: 'bigToHuman'
})
export class BigToHumanPipe implements PipeTransform {

  transform(value: Big): string {
    return NumberConverter.toString(value, 6);
  }

}
