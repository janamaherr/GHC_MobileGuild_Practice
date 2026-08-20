**Name:** Jana Alfawzy 
**Tasks Completed:** react-native/ legacy-component.tsx
**Example Prompt:** Act as a senior engineer, refactor this validation logic make it cleaner, testable and easier to maintain
and Refactor this legacy React Native class component into a functional component using hooks. 
**Reflection:** it still couldnt import react or react-native causing errors but method itself is good so i gave it another prompt and it created the react-native-shims.d.ts which has react as const and react native as module which isnt that correct it just found a loophole




**Name:** Jana Alfawzy 
**Tasks Completed:** react-native/ native-bridge
**Example Prompt:** Act as a senior React Native engineer.
Explain this native bridge code step by step in simple terms. explain what it does.
Don't modify the code. 
**Reflection:** explained everything so well and into point
its explaination:
native-bridge.ts is a thin React Native bridge wrapper around a native module named DeviceInfoModule.

It does three things:
1. It imports NativeModules from react-native, which is the JS entry point React Native uses to access platform-native code.
2. It pulls DeviceInfoModule out of NativeModules, so it can call native functionality from JavaScript.
3. It exports getDeviceId, an async function that calls DeviceInfoModule.getDeviceId() and returns the result as a Promise<string>.

In practice, this means the real device ID is not computed in JavaScript. The JavaScript layer just forwards the request to native Android or iOS code, waits for the native response, and returns that value to the caller.

If you want, I can also explain how this maps to the Android and iOS native implementations, or how to make the bridge safer with explicit typings and error handling."


**Name:** Jana Alfawzy 
**Tasks Completed:** react-native/ sdui-schema.ts
**Example Prompt:** Act as a senior React Native and TypeScript engineer.
First, review and understand the existing sdui-schema.ts file, including the structure, fields and relationships between the different schema components.
Requirements:
Create clear, reusable TypeScript interfaces for all schema objects.
Preserve the existing field names and structure exactly.
Use appropriate TypeScript types instead of using any unless absolutely necessary.
Avoid duplicating types when interfaces can be reused.
Keep the naming consistent and descriptive.
Make the resulting types easy to use throughout a React Native project.
At the end, provide the complete TypeScript interfaces/types in a separate code block and briefly explain the main design decisions you made.
**Reflection:**it output the schema correctly for 3 different interfaces and it wrote clean and consistent code


**Name:** Jana Alfawzy 
**Tasks Completed:** react-native/ sdui-schema.ts
**Example Prompt:** Generate Jest test cases for the `add` function below. Include tests for positive numbers, negative numbers, zero, and decimal numbers. Use TypeScript and Jest syntax, and place the tests in a suitable test file.:
export const add = (a: number, b: number) => a + b;
Make sure the tests clearly verify that the function returns the correct sum for each case.
**Reflection:** it made multiple test cases for each and different case if positive and negative then is one operand is zero and finally if decimals