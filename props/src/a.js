const fruits = ["apple", "banana", "orange", "kiwi", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.map((v, i) => {
//   console.log(`${i + 1}번째 과일: ${v}`);
// });

const array = [1, 2, 4, 8];

console.log(array);

const squareArray = array.map((v) => {
  return v * v;
});

const squareArray2 = [];

for (let i = 0; i < array.length; i++) {
  squareArray2.push(array[i] * array[i]);
}

console.log(squareArray);
console.log(squareArray2);
