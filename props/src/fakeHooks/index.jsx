export const fakeUseState = () => {
  let value;
  const setValue = () => {};
  //   return { value: value, setValue: setValue };
  return [value, setValue];
};
