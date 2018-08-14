function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

console.log(greet('Good morning', 'Bob'))

const names = ['Michael', 'Greg', 'Dimitriev', 'Whateva'];

const greetings = names.map(greet)

console.log(greetings);

// problem we need to solve is to pass in two parameters greeting and a name !!
// functions can be the return value of other functions

// step 2

function greet2(greeting) { // <- scope of the parameter ** closure
  return (name) => {
    return `${greeting}, ${name}`;
  }
}

const names2 = ['Michael', 'Greg', 'Dimitriev', 'Whateva'];

const morningGreetingFn = greet2('Guten morgen');

const greetings2 = names2.map(morningGreetingFn);

console.log(greetings2);

// Higher order function -> takes a function as an argument 
//                       -> returns a function
// Closure               -> can access and use variables that are not passed directly into the function, because of the placement of the function relative to the variables
// Currying and Partial Application
