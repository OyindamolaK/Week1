function divisible(a) {
  let count = 0;
  let length = a.length;
  for (let i = 0; i <= length; i++) {
    if (a[i] % 2 === 0 && a[i] > 15) {
      count++;
    }
  }
  return count;
}
console.log(divisible([60, 30, 40, 10]));
module.exports = divisible;
