import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    console.log("LexiBot pressed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LexiBot</Text>
      <Button title="Press me!" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
export default App;
