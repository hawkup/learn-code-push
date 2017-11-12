import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import codePush from 'react-native-code-push';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from code push</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App = codePush(App);