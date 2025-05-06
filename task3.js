let a = prompt('Укажите первое число из двух. По итогу будет выведена сумма чисел.')
a = parseInt(a);
let b = prompt('Укажите второе число')
b = parseInt(b);

function getSumFunction(a) {
  return function (b) {
    return a + b
  }
};

const sumFunction = getSumFunction(a);

const sum = sumFunction(b)

console.log(sum);