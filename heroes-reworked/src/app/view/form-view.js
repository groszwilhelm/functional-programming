import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';

import { toggleForm, setName, setPower, addHero } from '../actions/actions';

const { div, form, label, input, button} = hh(h);

export function formView(state, dispatch) {
  if (state.showForm) {
    return form({ onclick: event => event.preventDefault() }, [
      div({ className: 'form-group' }, [
        formField('Name', state.name, (event) => dispatch(setName(event.target.value))),
        formField('Power', state.power, (event) => dispatch(setPower(event.target.value))),
        formButtons(dispatch)
      ])
    ]);
  }

  return button({ className: 'btn btn-primary', onclick: event => dispatch(toggleForm(true)) }, 'Add hero');
}

function formField(title, inputValue, callback) {
  return div({}, [
    label({ className: 'mr-3' }, title),
    input({ value: inputValue, oninput: callback })
  ])
}

function formButtons(dispatch) {
  return div({}, [
    button({ className: 'btn btn-success', type: 'submit', onclick: event => dispatch(addHero()) }, 'Save'),
    button({ className: 'btn btn-danger ml-2', onclick: event => dispatch(toggleForm(false)) }, 'Cancel')
  ])
}
