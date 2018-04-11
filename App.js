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
      <View style={[style.container,style.other]}>
        <View style={style.subBox}>
          <Text>一些文字</Text>
        </View>
        <Text style={style.text}>一些文字</Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    margin:25, 
    padding:30,
    borderWidth:2,
    borderColor:'#543',
    borderStyle:'solid',//solid | dotted | dashed 
    shadowColor:'red',
    shadowOffset:{width:10,height:0},
    shadowOpacity:0.5,
    //ios 独有shadow
    elevation:20 
    //android 5.0 以上 独有 elevation

  
  
  },
  other:{
    marginLeft: 25,
    backgroundColor: '#00ff66'
  },
  subBox:{
    height:50,
    backgroundColor:'#786'
  },
  text:{
    color:'red'
  }
})


