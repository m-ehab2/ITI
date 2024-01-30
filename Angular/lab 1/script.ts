class Account {
	constructor(private Acc_No: number, private Balance: number) {}
	debitAmount() {}
	creditAmount() {}
	getAmount() {}
}
interface IAccount {
	Date_of_Opening: Date;
	addCustomer();
	removeCustomer();
}
class Saving_Account extends Account implements IAccount {
	constructor(
		public Min_Balance: number,
		Acc_No,
		Balance,
		public Date_of_Opening: Date
	) {
		super(Acc_No, Balance);
	}
	addCustomer() {}
	removeCustomer() {}
}
class Current_Account extends Account implements IAccount {
	constructor(
		public Interest_Rate: number,
		Acc_No,
		Balance,
		public Date_of_Opening: Date
	) {
		super(Acc_No, Balance);
	}
	addCustomer() {}
	removeCustomer() {}
}
