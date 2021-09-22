import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ButtonOutline from './Buttons/ButtonOutline/ButtonOutline';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ButtonOutline materialIcon={'done'} title={'Click'} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
