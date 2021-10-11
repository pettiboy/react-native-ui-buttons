import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {ButtonOutline, ButtonSolid} from 'react-native-ui-buttons';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Button Outline</Text>
        <ButtonOutline
          title={'Test Button'}
          buttonLoading={false}
          disabled={false}
          onPress={() => console.debug('Button Outline Pressed')}
          materialIconRight={'check'}
        />
        <Text style={styles.heading}>Button Solid</Text>
        <ButtonSolid
          title={'Test Button'}
          buttonLoading={false}
          disabled={false}
          onPress={() => console.debug('Button Solid Pressed')}
          materialIconRight={'check'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 30,
  },
  container: {
    padding: 20,
  },
});

export default App;
