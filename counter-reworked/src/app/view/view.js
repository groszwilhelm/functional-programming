import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';
import { ACTION_TYPES } from '../actions/actions';

const { div, button } = hh(h);

export function view(state, dispatch) {
  return  div({ className: 'card w-25 mt-5' }, [
    div({ className: 'card-body' }, [
      div({ className: 'mb-3' }, `Current count value: ${state.counter}` ),
      div({ className: 'float-right' }, [
        button({ className: 'btn btn-primary', onclick: event => dispatch(ACTION_TYPES.ADD) }, 'Add'),
        button({ className: 'btn btn-danger ml-2', onclick: event => dispatch(ACTION_TYPES.SUBSTRACT) }, 'Subtract')
      ])
    ])
  ]);
}

// razvan.coldea@iquestgroup.com
