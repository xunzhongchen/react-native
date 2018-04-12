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
        <View style={style.header}>
          <Text>Home</Text>
        </View>

        <View style={style.scrollView}>
          <ScrollView
          //style={style.scrollView}
          //contentContainerStyle={style.scrollView}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    justifyContent: 'center'
  },
  header: {
    paddingTop: 20,
    height: 64,
    alignItems: 'center',
    backgroundColor: '#E83A59',
    justifyContent: 'center',
  },
  scrollView: {
    height: 300,
    // backgroundColor: 'red',
    // marginTop: 20,
    // marginBottom: 20,

  }
})


