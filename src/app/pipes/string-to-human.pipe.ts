import { Pipe, PipeTransform } from '@angular/core';
import {NumberConverter} from "../utils/NumberConverter";
import Big from "big.js";

@Pipe({
  name: 'stringToHuman'
})
export class StringToHumanPipe implements PipeTransform {

  transform(value: string): string {
    if(value) {
      return NumberConverter.toString(NumberConverter.toFixed(NumberConverter.stringToBig(value)));
    } else {
      return NumberConverter.toString(NumberConverter.toFixed(new Big(0)));
    }
  }

}
