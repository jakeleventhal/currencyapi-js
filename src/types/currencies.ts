import type { CurrencyType, SupportedCurrency } from ".";

export interface CurrenciesParams {
  currencies?: Array<SupportedCurrency>;
}

interface SingleCurrencyResponse {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: SupportedCurrency;
  name_plural: string;
  type: CurrencyType;
  countries: Array<string>;
}

export type CurrenciesResponse = {
  data: Partial<Record<SupportedCurrency, SingleCurrencyResponse>>;
};
