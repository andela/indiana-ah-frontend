import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers/index';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();
const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
