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

export interface Transaction {}

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  on_budget: boolean;
  closed: boolean;
  note: string;
  balance: number;
  cleared_balance: number;
  uncleared_balance: number;
  transfer_payee_id: string; //The payee id which should be used when transferring to this account
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

export interface Category {
  // {
  //   id*	string($uuid)
  //   category_group_id*	string($uuid)
  //   category_group_name	string
  //   name*	string
  //   hidden*	boolean
  //   Whether or not the category is hidden
  //   original_category_group_id	string($uuid)
  //   nullable: true
  //   DEPRECATED: No longer used. Value will always be null.
  //   note	string
  //   nullable: true
  //   budgeted*	integer($int64)
  //   Budgeted amount in milliunits format
  //   activity*	integer($int64)
  //   Activity amount in milliunits format
  //   balance*	integer($int64)
  //   Balance in milliunits format
  //   goal_type	string
  //   nullable: true
  //   The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')
  //   Enum:
  //   [ TB, TBD, MF, NEED, DEBT, ]
  //   goal_needs_whole_amount	boolean
  //   nullable: true
  //   default: null
  //   Indicates the monthly rollover behavior for "NEED"-type goals. When "true", the goal will always ask for the target amount in the new month ("Set Aside"). When "false", previous month category funding is used ("Refill"). For other goal types, this field will be null.
  //   goal_day	integer($int32)
  //   nullable: true
  //   A day offset modifier for the goal's due date. When goal_cadence is 2 (Weekly), this value specifies which day of the week the goal is due (0 = Sunday, 6 = Saturday). Otherwise, this value specifies which day of the month the goal is due (1 = 1st, 31 = 31st, null = Last day of Month).
  //   goal_cadence	integer($int32)
  //   nullable: true
  //   The goal cadence. Value in range 0-14. There are two subsets of these values which behave differently. For values 0, 1, 2, and 13, the goal's due date repeats every goal_cadence * goal_cadence_frequency, where 0 = None, 1 = Monthly, 2 = Weekly, and 13 = Yearly. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month. For values 3-12 and 14, goal_cadence_frequency is ignored and the goal's due date repeats every goal_cadence, where 3 = Every 2 Months, 4 = Every 3 Months, ..., 12 = Every 11 Months, and 14 = Every 2 Years.
  //   goal_cadence_frequency	integer($int32)
  //   nullable: true
  //   The goal cadence frequency. When goal_cadence is 0, 1, 2, or 13, a goal's due date repeats every goal_cadence * goal_cadence_frequency. For example, goal_cadence 1 with goal_cadence_frequency 2 means the goal is due every other month. When goal_cadence is 3-12 or 14, goal_cadence_frequency is ignored.
  //   goal_creation_month	string($date)
  //   nullable: true
  //   The month a goal was created
  //   goal_target	integer($int64)
  //   nullable: true
  //   The goal target amount in milliunits
  //   goal_target_month	string($date)
  //   nullable: true
  //   The original target month for the goal to be completed. Only some goal types specify this date.
  //   goal_percentage_complete	integer($int32)
  //   nullable: true
  //   The percentage completion of the goal
  //   goal_months_to_budget	integer($int32)
  //   nullable: true
  //   The number of months, including the current month, left in the current goal period.
  //   goal_under_funded	integer($int64)
  //   nullable: true
  //   The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period. This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month. The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.
  //   goal_overall_funded	integer($int64)
  //   nullable: true
  //   The total amount funded towards the goal within the current goal period.
  //   goal_overall_left	integer($int64)
  //   nullable: true
  //   The amount of funding still needed to complete the goal within the current goal period.
  //   deleted*	boolean
  //   Whether or not the category has been deleted. Deleted categories will only be included in delta requests.
  //   }
}

export enum AccountType {
  checking,
  savings,
  cash,
  creditCard,
  lineOfCredit,
  otherAsset,
  otherLiability,
  mortgage,
  autoLoan,
  studentLoan,
  personalLoan,
  medicalDebt,
  otherDebt,
}
