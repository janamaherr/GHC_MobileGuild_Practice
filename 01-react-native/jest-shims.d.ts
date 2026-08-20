declare function describe(name: string, fn: () => void): void;
declare function test(name: string, fn: () => void): void;

declare function expect<T>(actual: T): {
  toBe(expected: T): void;
};