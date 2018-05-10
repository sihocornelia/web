var array = [4, 6, 1, 3, 2];

array.sort(function compare(a, b) {
  return a-b;
});

function missingNumber(array) {
  var nr = -1;
  
  array.forEach(function iterate(value, index, array) {
      if (index < 4 && (value+1 !== array[index+1])) {
          nr = value;
      }
  });

  return nr+1;
}

//console.log(array);
console.log(missingNumber(array));
