/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const contacts = ['Sid', 'Biswa', 'Aman, Sritam', 'Abi', 'Zaff'];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View>
        <FlatList
          data={contacts}
          renderItem={({item}) => <Text>{item}</Text>}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  contactName: {
    fontSize: 18,
    marginVertical: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
