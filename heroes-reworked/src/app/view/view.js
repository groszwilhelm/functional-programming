import { h } from 'virtual-dom';
import hh from 'hyperscript-helpers';

import { formView } from './form-view';
import { tableView } from './table-view';

const { div, h1 } = hh(h);

export function view(state, dispatch) {
  return  div({ className: 'card mt-5' }, [
    div({ className: 'card-body' }, [
      h1({}, 'Hero Generator'),
      formView(state, dispatch),
      tableView(state, dispatch)
    ])
  ]);
}
