function getExclamationMarks(enthusiasm: number): string {
  if (enthusiasm < 1) {
    return '!';
  }
  return '!'.repeat(enthusiasm);
}

export default getExclamationMarks;
