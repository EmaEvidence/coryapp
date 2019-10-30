/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import StoryBookUI from './storybook';

const App: () => React$Node = () => {
  return (
    <>
      <StoryBookUI />
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
