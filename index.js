function demethodizeStandard ( fn ) {
  return function () {
    var len = arguments.length - 1;
    var args = new Array( len );
    for ( var i = 0; i < len; i++ ) {
      args[i] = arguments[i + 1];
    }
    return fn.apply( arguments[0], args );
  };
}

function demethodizeFunctional ( fn ) {
  return function () {
    var len = arguments.length;
    var args = new Array( len );
    for ( var i = 0; i < len; i++ ) {
      args[i] = arguments[i];
    }
    var ctx = args.pop();
    return fn.apply( ctx, args );
  };
}

module.exports = demethodizeStandard;
module.exports.functional = demethodizeFunctional;
