export type ErrorMessage = string | null;

export type ErrorInfo = {
  errorMessage: ErrorMessage;
  reset: ((value: string) => string) | null;
};
