export interface EnthusiasmState {
  enthusiasmLevel: number;
  languageName: string;
}

interface StoreState {
  enthusiasm: EnthusiasmState;
}

export default StoreState;
