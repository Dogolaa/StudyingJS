function retornaMaior(x, y) {
  return x > y ? x : y;
}

const retornaMaior2 = (x, y) => {
  return x > y ? x : y;
};

const retornaMaior3 = (x, y) => (x > y ? x : y);

console.log(retornaMaior(11, 10));
console.log(retornaMaior2(11, 10));
console.log(retornaMaior3(11, 10));
