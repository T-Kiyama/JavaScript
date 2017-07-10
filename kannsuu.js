var z = 2;
function add(x, y) {
  return x + y;
}

var arr = [1, 2, 3];
function double(arr) {
  var _arr = [];
  for(var i = 0; i < arr.length; i++) {
    _arr.push(arr[i] * 2);
  }
  return _arr;
}
