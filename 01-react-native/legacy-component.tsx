/// <reference path="./react-native-shims.d.ts" />
// Task: Refactor this legacy React Native class component into a functional component using hooks.
import React, { useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';

export const incrementCount = (count: number) => count + 1;

const INITIAL_COUNT = 0;

export default function LegacyComponent() {
  const [count, setCount] = useState(INITIAL_COUNT);

  const increment = useCallback(() => {
    setCount((currentCount: number) => incrementCount(currentCount));
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}