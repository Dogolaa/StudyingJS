function recebeNum(num) {
  if (typeof num !== 'number') {
    return num;
  }
  if (num % 5 === 0 && num % 3 === 0) {
    return console.log('FizzBuzz');
  }

  if (num % 5 === 0) {
    return console.log('Buzz');
  }

  if (num % 3 === 0) {
    return console.log('Fizz');
  }
}

console.log(recebeNum('a'));

for (let i = 0; i <= 100; i++) {
  recebeNum(i);
}
