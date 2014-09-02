var needle = require('needle');

needle.get(
  'http://nschwab.wisely.io/v1/admin/merchant/search?query=Babo Market&is_like=0',
  {'headers' : {'username' : 'miguelsanchez', 'pass' : 'cabrerawho?'}},
  function (err, resp) {
    console.log(resp.body);
  }
);
