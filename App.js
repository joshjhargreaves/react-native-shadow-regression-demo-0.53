import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewWithShadow}>
          <View style={styles.viewAbsolute} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewWithShadow: {
    width: 200,
    height: 300,
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
  viewAbsolute: {
    top: 20,
    bottom: 20,
    width: 30,
    right: 30,
    backgroundColor: 'red',
    position: 'absolute',
  },
});
