const array = [{ prop: '1' }, { prop: '2' }];

const prop3 = { prop: '3' };

// add an item to an array
const array2 = [...array, prop3];

console.log(array2)

const numbers = [1, 2, 3];

function double(number) {
  return number * 2;
}

// update item inside the array
const doubledNumbers = numbers.map(double);

doubledNumbers
numbers

// remove an item from the array

const filteredArray = array.filter((item) => item.prop !== '1');

filteredArray


// reduce
// media
// calificative

const grades = [ 10, 8, 3, 6, 2, 1, 9, 8, 10 ];

function sum(a, b) {
  return a + b;
}

// accumulator, next value
const total = grades.reduce(sum, 0);
const length = grades.length

const avg = total/length;
avg


const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
  const { fb = 0, b = 0, s = 0, is = 0 } = acc;

  if (grade >= 8) {
    return { ...acc, fb: fb + 1 };
  } else if (grade >= 6) {
    return { ...acc, b: b + 1 };
  } else if (grade >= 4) {
    return { ...acc, s: s + 1 };
  } else {
    return { ...acc, is: is + 1 };
  }
}

letterGradeCount
