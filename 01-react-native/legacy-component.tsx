// Task: Refactor this legacy React Native class component into a functional component using hooks.
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class LegacyComponent extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
      </View>
    );
  }
}