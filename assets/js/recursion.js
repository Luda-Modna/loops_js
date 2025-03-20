function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const f4 = factorial(4);
console.log(f4);

function bracketSrg(b) {
  if (b === 0) {
    return;
  }
  bracketSrg(b - 1);
  console.log(`()`);
}

bracketSrg(1);
