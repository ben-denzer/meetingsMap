import initialState from './initialState';
import enthusiasmReducer from './enthusiasmReducer';
import {
  DECREMENT_ENTHUSIASM,
  INCREMENT_ENTHUSIASM,
  RESET_ENTHUSIASM,
  TEST
} from '../constants/index';
import { EnthusiasmState } from 'types/StoreState';

describe('Enthusiasm Reducer', () => {
  const { enthusiasm: initial } = initialState;
  it('should return state unmodified', () => {
    expect(enthusiasmReducer(initial, { type: TEST }).enthusiasmLevel).toEqual(
      1
    );
  });
  it('should decrement', () => {
    const state: EnthusiasmState = { enthusiasmLevel: 2, languageName: 'a' };
    expect(
      enthusiasmReducer(state, { type: DECREMENT_ENTHUSIASM }).enthusiasmLevel
    ).toEqual(1);
  });
  it('should increment', () => {
    expect(
      enthusiasmReducer(initial, { type: INCREMENT_ENTHUSIASM }).enthusiasmLevel
    ).toEqual(2);
  });
  it('should reset', () => {
    const state: EnthusiasmState = { enthusiasmLevel: -1, languageName: 'a' };
    expect(
      enthusiasmReducer(state, { type: RESET_ENTHUSIASM }).enthusiasmLevel
    ).toEqual(1);
  });
});
