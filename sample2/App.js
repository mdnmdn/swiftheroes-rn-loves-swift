import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class App extends React.Component {

  constructor(props){
    super(props);    
  }

  click() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Wow!</Text>
        <Button title="click me" onPress={() =>this.click()}/>          
      </View>
    );
  }
}

