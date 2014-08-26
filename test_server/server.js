var express = require('express');

var server = express();
server.use(express.static('/Users/migchez/Wisely/CommandCenter/app/'));

var port = Number (process.env.PORT || 5000);
server.listen(port, function () {
  console.log('listening on ' + port);
});
