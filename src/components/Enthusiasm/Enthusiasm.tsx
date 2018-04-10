import * as React from 'react';
import { EnthusiasmWrapper } from './EnthusiasmStyles';
import getExclamationMarks from '../../utils/getExclamationMarks';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Enthusiasm = (props: Props): JSX.Element => {
  const {
    name,
    enthusiasmLevel = 1,
    onDecrement,
    onIncrement,
    onReset
  } = props;
  if (!enthusiasmLevel || enthusiasmLevel < 1) {
    return (
      <div>
        <div>You Broke The System</div>{' '}
        <button id="reset" onClick={onReset}>
          {' '}
          Reset{' '}
        </button>
      </div>
    );
  }
  return (
    <EnthusiasmWrapper>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button id="decrement" onClick={onDecrement}>
          {' '}
          -{' '}
        </button>
        <button id="increment" onClick={onIncrement}>
          {' '}
          +{' '}
        </button>
        <button id="reset" onClick={onReset}>
          {' '}
          Reset{' '}
        </button>
      </div>
    </EnthusiasmWrapper>
  );
};

export default Enthusiasm;
