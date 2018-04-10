import Enthusiasm from '../components/Enthusiasm/Enthusiasm';
import * as actions from '../actions/enthusiasmActions';
import StoreState from '../types/StoreState';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(store: StoreState) {
  const { enthusiasmLevel, languageName } = store.enthusiasm;
  return { enthusiasmLevel, name: languageName };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onReset: () => dispatch(actions.resetEnthusiasm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Enthusiasm);
