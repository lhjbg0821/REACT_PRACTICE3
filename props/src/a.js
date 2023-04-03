const fruits = ["apple", "banana", "orange", "kiwi", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

fruits.map((v, i) => {
  console.log(`${i + 1}번째 과일: ${v}`);
});
