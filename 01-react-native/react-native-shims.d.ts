declare module 'react' {
  export type Dispatch<T> = (value: T) => void;
  export type SetStateAction<T> = T | ((previousState: T) => T);
  export type FC<P = {}> = (props: P) => JSX.Element | null;

  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly unknown[]): T;
  export function useState<T>(initialState: T): [T, Dispatch<SetStateAction<T>>];

  const React: {
    useCallback: typeof useCallback;
    useState: typeof useState;
  };

  export default React;
}

declare module 'react/jsx-runtime' {
  export const Fragment: any;
  export const jsx: any;
  export const jsxs: any;
}

declare module 'react-native' {
  export const Button: any;
  export const Text: any;
  export const View: any;
  export const NativeModules: {
    [key: string]: any;
  };
}

declare namespace JSX {
  interface Element {}

  interface IntrinsicElements {
    Button: any;
    Text: any;
    View: any;
  }
}