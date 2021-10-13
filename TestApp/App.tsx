import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonOutline, ButtonSolid} from 'react-native-ui-buttons';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* Button Outline Examples */}
        <Text style={styles.heading}>ButtonOutline (enabled)</Text>
        <ButtonOutline
          title={'Test Button'}
          onPress={() => console.debug('Button Outline Pressed')}
          materialIconRight={'check'}
        />

        <Text style={styles.heading}>ButtonOutline (disabled)</Text>
        <ButtonOutline
          title={'Test Button'}
          disabled={true}
          onPress={() => console.debug('Button Outline Pressed')}
          materialIconRight={'check'}
        />

        <Text style={styles.heading}>ButtonOutline (loading)</Text>
        <ButtonOutline
          title={'Test Button'}
          buttonLoading={true}
          disabled={true}
          onPress={() => console.debug('Button Outline Pressed')}
          materialIconRight={'check'}
        />

        <View style={{margin: 20}} />

        {/* ButtonSolid Examples */}
        <Text style={styles.heading}>ButtonSolid (enabled)</Text>
        <ButtonSolid
          title={'Test Button'}
          onPress={() => console.debug('Button Solid Pressed')}
          materialIconRight={'check'}
        />

        <Text style={styles.heading}>ButtonSolid (disabled)</Text>
        <ButtonSolid
          title={'Test Button'}
          disabled={true}
          onPress={() => console.debug('Button Solid Pressed')}
          materialIconRight={'check'}
        />

        <Text style={styles.heading}>ButtonSolid (loading)</Text>
        <ButtonSolid
          title={'Test Button'}
          buttonLoading={true}
          disabled={true}
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
