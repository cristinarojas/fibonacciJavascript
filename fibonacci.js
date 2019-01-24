const fibonacci = (result, len) => {
  let num1 = result[0];
  let num2 = result[1];
  let next;
  let counter = 2; // Because I already have fill it the array [0,1]

  while (counter < len) {
    next = num1 + num2;
    result.push(next);

    num1 = num2;
    num2 = next;
    counter ++;
  }

  console.log('result', result);
  return result;
}


fibonacci([0,1], 15);
// initial numbers [0,1]
// (15) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
