let x = prompt('Введите число')
x = parseInt(x);
let n = prompt('Введите степень числа')
n = parseInt(n);


const power = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

const result = power(x, n);

console.log(result)