// expected output [1, 2, { p: 3 }, 6 , 8, 10, 11, 'poop']
// input [1, 2, { p: 3 }, [[6]], [8, 10], [[[[[11]]]]], ['poop']];

const collection = [1, 2, { p: 3 }, [[6]], [8, 10], [[[[[11]]]]], ['poop']];

function run(array) {
  return array
    .reduce(destructure, []);
}

function destructure(acc, curr) {
  if (Array.isArray(curr)) {
    return [...acc, ...curr.reduce(destructure, [])]
  }
  return [...acc, curr]
}

console.log(run(collection));

