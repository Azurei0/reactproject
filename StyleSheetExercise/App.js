/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  render(){
    return(
      <><View>
        <Text style={[styles.Text, {fontSize: 20}]}>Muhammad Azri 1814867</Text>
      </View>
      <View style={styles.container}>
          <View style={[styles.box, { backgroundColor: 'red' }]} />
          <View style={[styles.box, { backgroundColor: 'blue' }]} />
          <View style={[styles.box, { backgroundColor: 'black' }]} />

        </View></>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  box: {
    height: 100,
    width: 100,
  },
});