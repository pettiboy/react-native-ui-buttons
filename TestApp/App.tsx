import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ButtonOutline} from 'react-native-ui-buttons';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Button Outline</Text>
        <ButtonOutline title={'Test Button'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 30,
  },
  container: {
    padding: 20,
  },
});

export default App;
