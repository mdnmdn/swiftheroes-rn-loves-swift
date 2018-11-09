import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm a react native App</Text>
      </View>
    );
  }
}

