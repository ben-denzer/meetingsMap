import * as constants from '../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface ResetEnthusiasm {
  type: constants.RESET_ENTHUSIASM;
}

export interface Test {
  type: constants.TEST;
}

export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | ResetEnthusiasm
  | Test;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return { type: constants.INCREMENT_ENTHUSIASM };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return { type: constants.DECREMENT_ENTHUSIASM };
}

export function resetEnthusiasm(): ResetEnthusiasm {
  return { type: constants.RESET_ENTHUSIASM };
}
