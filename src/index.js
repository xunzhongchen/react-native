/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Card from './card';


export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    justifyContent: 'center'
  }
})


