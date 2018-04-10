import StoreState from '../types/StoreState';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import enthusiasm from './enthusiasmReducer';

const rootReducer = combineReducers<StoreState>({
  enthusiasm,
  routing: routerReducer
});

export default rootReducer;
