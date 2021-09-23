import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ButtonOutline from './Buttons/ButtonOutline/ButtonOutline';
import {COLORS} from './Buttons/utils/colors';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ButtonOutline
          materialIcon={'done'}
          title={'Click'}
          style={{margin: 10}}
        />
        <ButtonOutline
          useColor={COLORS.GREEN}
          materialIcon={'done'}
          title={'Click'}
          iconAlignRight
          style={{margin: 10}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

export default App;
