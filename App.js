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
      <View style={style.container}>
        <View style={style.subBox}>
          <Text style={style.text}>一些文字</Text>
        </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    
  },
  subBox:{
   
  },
  text:{
   
  }
})


