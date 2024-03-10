import type { CurrencyType, SupportedCurrency } from ".";

export interface LatestParams {
  base_currency?: SupportedCurrency;
  currencies?: Array<SupportedCurrency>;
  type?: CurrencyType;
}

export interface LatestResponse {
  meta: {
    last_updated_at: string;
  };
  data: Record<SupportedCurrency, { code: SupportedCurrency; value: number }>;
}
