const dragonsString = 'Fluffykins, Roche, Butters, Tharran';

const length = pipe(split, getLength, multiplyBy2)(dragonsString);

const getLengthAndMultiplyBy2 = pipe(split, getLength, multiplyBy2);

const length2 = getLengthAndMultiplyBy2(dragonsString);

length2


length

function pipe (...fns) {
  return arg => {
    return fns.reduce((acc, curr) => {
      return curr(acc)
    }, arg);
  }  
}

function getLength(array) {
  return array.length;
}

function split(string) {
  return string.split(', ');
}

function multiplyBy2(val) {
  return val * 2;
}
