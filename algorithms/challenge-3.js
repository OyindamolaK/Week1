function isDivisbleByN(arr, n) {
  let nArray = [];
  let i = 0;
  let length = arr.length;

  for (i = 0; i < length; i++) {
    if (arr[i] % n === 0) {
      nArray.push(arr[i]);
    }
  }
  return nArray;
}
console.log(isDivisbleByN([2, 4, 6, 8, 7, 9], 2));
module.exports = isDivisbleByN;
