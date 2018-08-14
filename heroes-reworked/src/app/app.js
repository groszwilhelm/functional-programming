import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

import { update } from './update/update';

export function app(view, rootNode, initialState) {
  let state = initialState;
  let currentView = view(initialState, dispatch);
  let node = createElement(currentView); // <----- create a vitual dom node

  rootNode.appendChild(node);

  function dispatch(action) {
    state = update(action, state);

    const updatedView = view(state, dispatch);
    const patches = diff(currentView, updatedView); // <------ create a diff between current view and updated view

    rootNode = patch(node, patches);
    currentView = updatedView;
  }
}
