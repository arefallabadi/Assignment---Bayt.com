function all(arr, callBackFunction) {
  for (let i = 0; i < arr.length; i++) {
    if (!callBackFunction(arr[i])) return false;
  }
  return true;
}

function callBackFunction(num) {
  num < 7;
}

var allAreLessThanSeven = all([1, 2, 9], callBackFunction);

console.log(allAreLessThanSeven);
