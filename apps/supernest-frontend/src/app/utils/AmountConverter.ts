const BigDecimal = require('bigdecimal');
export class AmountConverter {
  public static convertDecimal128(amount: any, decimals = 6) {
    const raw = BigDecimal.BigDecimal(amount.$numberDecimal);
    const pow = BigDecimal.BigDecimal(10).pow(decimals);
    return raw.divide(pow, decimals, BigDecimal.RoundingMode.UNNECESSARY());
  }

  public static convertNumber(amount: number, decimals = 6) {
    const raw = BigDecimal.BigDecimal(amount);
    const pow = BigDecimal.BigDecimal(10).pow(decimals);
    return raw.divide(pow, decimals, BigDecimal.RoundingMode.UNNECESSARY());
  }
}
