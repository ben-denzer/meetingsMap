interface EnthusiasmState {
  enthusiasmLevel: number;
  languageName: string;
}

interface StoreState {
  enthusiasm: EnthusiasmState;
}

export { EnthusiasmState };
export default StoreState;
