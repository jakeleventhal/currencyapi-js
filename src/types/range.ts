import type { CurrenciesResponse, CurrencyType, SupportedCurrency } from ".";

export interface RangeParams {
  datetime_start: string;
  datetime_end: string;
  accuracy?: "day" | "hour" | "quarter_hour" | "minute";
  base_currency?: SupportedCurrency;
  currencies?: Array<SupportedCurrency>;
  type?: CurrencyType;
}

export interface RangeResponse {
  data: Array<{
    datetime: string;
    currencies: CurrenciesResponse["data"];
  }>;
}
