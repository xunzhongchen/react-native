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
        <View style={style.subBox}></View>
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
    borderLeftWidth:3,
    position:'absolute',// default:relative | absolute
    left:200,
    display:'flex'// default:flex | none
  
  
  },
  other:{
    marginLeft: 25,
    backgroundColor: '#00ff66'
  },
  subBox:{
    height:50,
    backgroundColor:'#786'
  }
})


