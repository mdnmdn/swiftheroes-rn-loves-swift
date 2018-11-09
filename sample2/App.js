import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 28,
  }
});


export default class App extends React.Component {

  constructor(props){
    super(props);    
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm React Native embedded!</Text>
        <Text style={styles.text}>Wow!</Text>
      </View>
    );
  }
}

