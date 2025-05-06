num = prompt('Укажите число:')

function getPrimeNumber(num) {
  let isPrime = true;
  let result;

  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
  } else if (num > 1000) {
    result = 'Данные неверны. Укажите число менее 1000';
  } else if (num === 1) {
    result = 'Число 1 не является простым или составным';
  } else if (num <= 0) {
    result = 'Вы ввели ноль или отрицательное число';
  }

  console.log(result);
  return result;
}

getPrimeNumber(num)