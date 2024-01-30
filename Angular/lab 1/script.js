var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(Acc_No, Balance) {
        this.Acc_No = Acc_No;
        this.Balance = Balance;
    }
    Account.prototype.debitAmount = function () { };
    Account.prototype.creditAmount = function () { };
    Account.prototype.getAmount = function () { };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(Min_Balance, Acc_No, Balance) {
        var _this = _super.call(this, Acc_No, Balance) || this;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(Interest_Rate, Acc_No, Balance) {
        var _this = _super.call(this, Acc_No, Balance) || this;
        _this.Interest_Rate = Interest_Rate;
        return _this;
    }
    return Current_Account;
}(Account));
