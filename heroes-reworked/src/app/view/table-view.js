import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';
import {removeHero, editHero } from '../actions/actions';

const { h3, table, thead, tbody, tr, th, td, i } = hh(h);

export function tableView(state, dispatch) {
  if (state.heroes.length) {
    return table({ className: 'table table-striped mt-5' }, [
      tableHeader(),
      tableBody(state, dispatch)
    ])
  }

  return h3({ className: 'mt-3' }, 'No heroes to show');
}

function tableHeader() {
  return thead({}, [
    tr({}, [
      cell(th, '', 'Name'),
      cell(th, '', 'Power'),
      cell(th, '', 'Actions')
    ])
  ])
}

function cell(tag, className, value) {
  return tag({ className }, value);
}

function tableBody(state, dispatch) {
  const rows = state.heroes.map(hero => row(hero, dispatch))
  const rowsWithTotal = [...rows, totalRow(state.heroes)]

  return tbody({}, [
    rowsWithTotal
  ]);
}

function row(hero, dispatch) {
  const { id, name, power } = hero;

  return tr({}, [
    cell(td, '', name),
    cell(td, '', power),
    cell(td, '', [
      i({ className: 'fas fa-edit pointer', onclick: event => dispatch(editHero(id)) }),
      i({ className: 'fas fa-trash-alt pointer', onclick: event => dispatch(removeHero(id)) }),
    ])
  ])
}

function totalRow(heroes) {
  const totalPower = heroes
    .map(hero => hero.power)
    .reduce((acc, next) => acc + next, 0);
    
  return tr({}, [
    cell(td, '', 'Total: '),
    cell(td, '', totalPower),
    cell(td, '', ''),
  ])
}
