import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TestComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>Test Component Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
      fontSize: 22, 
      color: '#f0354d', 
      fontWeight: 'bold',
  },
})

export default TestComponent