import Big from "big.js";


export class NumberConverter {
  // public static decimal128ToBig(amount: any, decimals = 6): Big {
  //   if(amount) {
  //    return new Big(amount.$numberDecimal);
  //   } else {
  //     return new Big(0);
  //   }
  // }

  public static bigDecimalToBig(value: any): Big {
    if(!value) {
      return new Big(0);
    }

    return new Big(value.value);
  }

  public static stringToBig(amount: string) {
    if(amount) {
      return new Big(amount);
    } else {
      return new Big(0);
    }
  }


  public static toFixed(value: Big, decimals = 6): Big {
    const pow = new Big(10).pow(decimals);
    if(value) {
      return value.div(pow);
    } else {
      return new Big(0);
    }
  }

  public static toString(value: Big, precision = 6): string {
    if(value) {
      return value.toFixed(precision, Big.roundDown);
    } else {
      return new Big(0).toFixed(precision, Big.roundDown);
    }
  }
}
