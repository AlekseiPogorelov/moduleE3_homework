let start = prompt('Введите первое число');
start = parseInt(start);
let stop = prompt('Введите второе число');
stop = parseInt(stop);


if (isNaN(start) || isNaN(stop)) {
  console.log('Ошибка: нужно ввести числа');
} else {
  printNumbers(start, stop);
}

function printNumbers(start, stop) {
  const step = start <= stop ? 1 : -1;
  const targetCount = 11; // Ограничение на количество чисел
  let current = start;
  let count = 0;

  
  console.log(current);
  count++;
  current += step;

  const timerId = setInterval(function () {
    if (count >= targetCount || (step > 0 && current > stop) || (step < 0 && current < stop)) {
      clearInterval(timerId);
      return;
    }

    console.log(current);
    count++;
    current += step;
  }, 1000);
}