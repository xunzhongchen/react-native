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
      <View style={[style.container,style.other]}></View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: '#ff6600',
    //marginTop: 25,
    borderRadius: 10,
    margin:'25',//可以使用百分比 
    //margin:"25 20 35 45",  非法报错 不支持 上 右 下 左  
    marginHorizontal:40,//水平方向 
    marginVertical:30//垂直方向
  },
  other:{
    marginLeft: 25,
    backgroundColor: '#00ff66'
  }
})


