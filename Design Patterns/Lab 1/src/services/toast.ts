export type toastType = {
  id: number;
  variant: "default" | "confirm" | "cancel";
  text: string;
  onClose(id: number): void;
};

export class Observable<DataType> {
  private observers: ((data: DataType) => void)[] = [];
  constructor() {}
  subscribe(fn: (data: DataType) => void) {
    this.observers.push(fn);
    return () => {
      this.observers = this.observers.filter((observer) => observer !== fn);
    };
  }
  // unsubscribe(fn: (data: DataType) => void) {}
  notify(data: DataType) {
    this.observers.forEach((observer) => observer(data));
  }
}
export type ToastEvents = Pick<toastType, "id" | "text" | "variant">;
export const observable = new Observable<ToastEvents>();
export function toast(text: string, variant: "default" | "confirm" | "cancel") {
  observable.notify({ id: Math.random(), text, variant });
}
