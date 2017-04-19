var usdValue = require('./usdValue');
var randomNumber = require('./randomNumber');

  var accountBalance = {//creates an object
    calculateBalance: function (){
      return usdValue(randomNumber(1, 1000000));
    },
    balanceHeading: function (){
      return 'Account balance: \n';
    }
  };

module.exports = accountBalance;
