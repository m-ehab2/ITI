class Observable<myType> {
  private observers: ((data: myType) => void)[] = [];

  subscribe(fn: (data: myType) => void) {
    this.observers.push(fn);
  }

  notify(data: myType) {
    this.observers.forEach((observer) => observer(data));
  }
}

export function CreateStore(init: number) {
  const observer = new Observable<number>();
  let state = init;

  const getState = () => state;

  const useStore = function () {
    return [
      getState,
      (newState: number): void => {
        state = newState;
        observer.notify(newState);
      },
    ] as const;
  };

  useStore.getObserver = () => observer;
  useStore.getState = () => state;

  return useStore;
}
