
  function usdValue (number){
    var stringNumber = number.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
    return ('$'+ stringNumber);

  }

  module.exports = usdValue;
