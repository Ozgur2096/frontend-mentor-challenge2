export function useStateManagement<T>(initialState: T) {
  let state = initialState;

  const setState = (newValue: T) => {
    state = newValue;
    return state;
  };

  type SetterFn = (newValue: T) => T;

  const useState: [T, SetterFn] = [state, setState];

  return useState;
}
