import type { CurrencyType, LatestResponse, SupportedCurrency } from ".";

export interface HistoricalParams {
  date: string;
  base_currency?: SupportedCurrency;
  currencies?: Array<SupportedCurrency>;
  type: CurrencyType;
}

export type HistoricalResponse = LatestResponse;
