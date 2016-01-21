.filter('abbreviateMe', function() {
    return function (myNum) {
    var fix,
        exp = myNum
        .toExponential()
        .split('e+')
        .map(function(el) {
          return +el;
        }),
      mod = exp[1] % 3;
      exp[0] = exp[0] * Math.pow(10, mod);
      exp[1] = ['','k','M','B','T','Quad','Quint','Sext'][(exp[1] - mod) / 3];
      var num = exp[0];
        if (parseInt(num).toString().length == 3) fix = 0; // Removes decimal on numbers with 3 digitx; ex: 999
        if (parseInt(num).toString().length == 2) fix = 1; // Only allow 1 decimal on numbers with 2 digits; ex: 99.9
        if (parseInt(num).toString().length == 1) fix = 2; // Allow up to 2 decimals on numbers with 1 digitM ex; 9.99
        return num.toFixed(fix) * 1 + exp[1];
    };
})