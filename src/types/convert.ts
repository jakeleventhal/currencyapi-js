import type { CurrencyType, LatestResponse, SupportedCurrency } from ".";

export interface ConvertParams {
  value: number;
  date?: string;
  base_currency?: SupportedCurrency;
  currencies?: Array<SupportedCurrency>;
  type?: CurrencyType;
}

export type ConvertResponse = LatestResponse;
