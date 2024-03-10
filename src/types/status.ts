interface Quota {
  total: number;
  used: number;
  remaining: number;
}

export interface StatusResponse {
  account_id: number;
  quotas: {
    month: Quota;
    grace: Quota;
  };
}
