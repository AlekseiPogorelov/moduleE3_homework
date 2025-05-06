function getNumberOfElements(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (const item of arr) {
    if (typeof item !== 'number' || isNaN(item)) {
      continue; 
    }

    if (item === 0) {
      zero++;
    } else if (item % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(`Чётных элементов: ${even}`);
  console.log(`Нечётных элементов: ${odd}`);
  console.log(`Нулевых элементов: ${zero}`);
}


const array = [1, 2, 3, 0, null, 'a', 4.5, NaN, 6, 0, 10, 57, 5, 6, 1, 0.3];

getNumberOfElements(array);