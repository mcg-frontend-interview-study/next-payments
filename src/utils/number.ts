export const isOnlyDigits = (value: string): boolean => {
  return /^[0-9]*$/.test(value);
};
