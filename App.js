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
  View
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{
        width:200,
        height:200,
        backgroundColor:'#ff6600',
        marginTop:25,
        borderRadius:10
      }}></View>
    );
  }
}


