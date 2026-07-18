// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFn = (value: unknown): value is (...args: any[]) => unknown => {
  return typeof value === "function";
};
