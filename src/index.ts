import type {
  ConvertParams,
  ConvertResponse,
  CurrenciesParams,
  CurrenciesResponse,
  Endpoint,
  HistoricalParams,
  HistoricalResponse,
  LatestParams,
  LatestResponse,
  RangeParams,
  RangeResponse,
  StatusResponse,
} from "./types";

export default class CurrencyAPI {
  private static readonly baseUrl = "https://api.currencyapi.com/v3/";

  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey || "";
  }

  private call = async (endpoint: Endpoint, params = {}) => {
    const paramString = new URLSearchParams({
      ...params,
    }).toString();

    return fetch(`${CurrencyAPI.baseUrl}${endpoint}?${paramString}`, {
      headers: {
        apikey: this.apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  };

  status = async (): Promise<StatusResponse> => {
    return this.call("status");
  };

  currencies = async (
    params?: CurrenciesParams
  ): Promise<CurrenciesResponse> => {
    return this.call("currencies", params);
  };

  latest = async (params?: LatestParams): Promise<LatestResponse> => {
    return this.call("latest", params);
  };

  historical = async (
    params: HistoricalParams
  ): Promise<HistoricalResponse> => {
    return this.call("historical", params);
  };

  range = async (params: RangeParams): Promise<RangeResponse> => {
    return this.call("range", params);
  };

  convert = async (params: ConvertParams): Promise<ConvertResponse> => {
    return this.call("convert", params);
  };
}
