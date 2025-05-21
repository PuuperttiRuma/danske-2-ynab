export interface Budget {
  id: string;
  name: string;
  last_modified_on: string;
  first_month: string;
  last_month: string;
  date_format: { format: string };
  currency_format: CurrencyFormat;
  accounts: Account[];
}

export interface CurrencyFormat {
  iso_code: string;
  example_format: string;
  decimal_digits: number;
  decimal_separator: string;
  symbol_first: boolean;
  group_separator: string;
  currency_symbol: string;
  display_symbol: boolean;
}

export interface Account {
  id: string;
  name: string;
  type: string;
  on_budget: boolean;
  closed: boolean;
  note: string;
  balance: number;
  cleared_balance: number;
  uncleared_balance: number;
  transfer_payee_id: string;
  direct_import_linked: boolean;
  direct_import_in_error: boolean;
  last_reconciled_at: string;
  debt_original_balance: number;
  debt_interest_rates: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
  debt_minimum_payments: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
  debt_escrow_amounts: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
  deleted: boolean;
}
