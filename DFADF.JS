let vals = [5,4,9,2,1];

function isEven(num) {
  return (num % 2 == 0)
}

vals = vals.filter(isEven);

console.log(vals);

