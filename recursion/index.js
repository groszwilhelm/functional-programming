// expected output: [1, 2, { p: 4 }, 1, 2, 3, 3, 4, 5, 10, 1, 2, 'poop']

const collection = [1, 2, { p: 4 }, [1, 2, 3], [[3, [4, 5]]], [[[[[10]]]]], [[1],[2]], 'poop'];

function run(array) {
  return array
    .reduce(destructure, []);
}

function destructure(acc, curr) {
  if (Array.isArray(curr)) {
    return [...acc, ...curr.reduce(destructure, [])];
  }
  return [...acc, curr];
}

console.log(run(collection));
