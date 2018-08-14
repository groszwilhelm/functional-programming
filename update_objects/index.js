const hero = {
  id: 1,
  name: 'Bellular',
  power: 1000,
  children: {
    hero: 2
  }
}

const hero2 = { ...hero }; // spread
console.log(hero2.children === hero.children);

// destructuring

const { id, ...heroWithoutId } = hero; // rest
console.log(heroWithoutId);
