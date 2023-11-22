type State<T> = [T, (newValue: T) => void];

export function useStateManagement<T>(initialValue: T): State<T> {
  let state: T = initialValue;
  const listeners: Array<(value: T) => void> = [];

  const setState = (newValue: T) => {
    state = newValue;
    listeners.forEach(listener => listener(state));
  };

  const getState = (): T => state;

  const subscribe = (listener: (value: T) => void) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return [getState(), setState];
}
