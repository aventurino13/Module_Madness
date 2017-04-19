  var http = require('http');
  var accountBalance = require('./accountBalance');

    http.createServer(function (req, res) {
      res.writeHead(200);
      res.write(accountBalance.balanceHeading());
      res.write(accountBalance.calculateBalance());
      res.end();
}).listen(3000);
