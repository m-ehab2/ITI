export function range(start: number, end: number, step: number) {
  let currentValue: number = start;
  return {
    next() {
      if (currentValue > end) {
        return { value: undefined, done: true };
      }
      const result: number = currentValue;
      currentValue = currentValue + step;
      return { value: result, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
