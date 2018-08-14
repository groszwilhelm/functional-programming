export const ACTION_TYPES = {
  TOGGLE_FORM: 'TOOGLE_FORM',
  SET_NAME: 'SET_NAME',
  SET_POWER: 'SET_POWER',
  ADD_HERO: 'ADD_HERO',
  REMOVE_HERO: 'REMOVE_HERO',
  EDIT_HERO: 'EDIT_HERO',
  LOAD_DATA: 'LOAD_DATA'
}

export function toggleForm(showForm) {
  return {
    type: ACTION_TYPES.TOGGLE_FORM,
    showForm
  }
}

export function setName(name) {
  return {
    type: ACTION_TYPES.SET_NAME,
    name
  }
}

export function setPower(power) {
  return {
    type: ACTION_TYPES.SET_POWER,
    power
  }
}

export function addHero() {
  return {
    type: ACTION_TYPES.ADD_HERO
  }
}

export function removeHero(id) {
  return {
    type: ACTION_TYPES.REMOVE_HERO,
    id
  }
}

export function editHero(editId) {
  return {
    type: ACTION_TYPES.EDIT_HERO,
    editId
  }
}
