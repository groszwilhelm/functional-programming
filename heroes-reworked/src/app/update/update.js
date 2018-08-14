import { ACTION_TYPES } from '../actions/actions';

export function update(action, state) {
  switch(action.type) {
    case ACTION_TYPES.TOGGLE_FORM: {
      const { showForm } = action;
      return { ...state, showForm: showForm };
    }
    case ACTION_TYPES.SET_NAME: {
      const { name } = action;
      return { ...state, name };
    }
    case ACTION_TYPES.SET_POWER: {
      let { power } = action;
      const powerFormatter = compose(defaultTo, parseInt);
      
      power = powerFormatter(0, power);

      return { ...state, power };
    }
    case ACTION_TYPES.ADD_HERO: {
      const updatedState = state.editId === null ? add(state) : edit(state);
      return updatedState;
    }
    case ACTION_TYPES.REMOVE_HERO: {
      const { id } = action;
      const heroes = state.heroes.filter(hero => hero.id !== id);

      return { ...state, heroes };
    }
    case ACTION_TYPES.EDIT_HERO: {
      const { editId } = action;
      const heroToEdit = state.heroes.find(hero => hero.id === editId);
      const { name, power } = heroToEdit;

      return { ...state, editId, name, power, showForm: true }
    }
    default: {
      return { ...state };
    }
  }
}

function add(state) {
  let { id, name, power, heroes } = state;

  heroes = heroes.slice();
  heroes.push({ id, name, power });
  id = id + 1;

  return { ...state, id, name: '', power: 0, heroes, showForm: false };
}

function edit(state) {
  const { editId, name, power } = state;
  const heroes = state.heroes.map(hero => {
    if (hero.id === editId) {
      return { ...hero, name, power };
    }
    return hero;
  });

  return { ...state, heroes, name: '', power: 0, editId: null, showForm: false };
}

function defaultTo(defaultValue, value) {
  if (value === undefined || isNaN(value) || value === null) {
    return defaultValue;
  }
  return value;
}

function compose(fn1, fn2) {
  return (...args) => {
    return fn2(fn1(...args));
  }
}
