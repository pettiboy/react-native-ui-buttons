import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ButtonOutline, ButtonSolid} from 'react-native-ui-buttons';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Button Outline</Text>
        <ButtonSolid title={'Test Button'} disabled={true} />
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
