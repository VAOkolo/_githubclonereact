import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { githubReducer } from './reducers/';

const store = createStore(githubReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
