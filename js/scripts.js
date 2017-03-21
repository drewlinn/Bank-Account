//business logic
function Account(name, balance) {
  this.userName = name;
  this.balance = balance;
};

Account.prototype.deposit = function() {
    newAccount.balance + depositAmount
};
Account.prototype.withdrawal = function()  {
    newAccount.balance - withdrawalAmount
};

//user interface logic
$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial").val());
    var newAccount = new Account(name, initialDeposit);
    console.log(newAccount);
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($("input#depositAmount").val());
    var withdrawalAmount = parseInt($("input#withdrawalAmount").val());

    // need to create an if statement that calls the specific prototype based on whether deposit or withdrawal is input within the form.

  });
});
