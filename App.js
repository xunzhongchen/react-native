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
        <View style={[style.subBox,style.s1]}>
          <Text style={style.text}>subBox1</Text>
          <Text style={style.text}>subBox12</Text>
        </View>
        <View style={[style.subBox,style.s2]}>
          <Text style={style.text}>subBox21</Text>
          <Text style={style.text}>subBox22</Text>
        </View>
        <View style={[style.subBox,style.s3]}>
          <Text style={style.text}>subBox31</Text>
          <Text style={style.text}>subBox32</Text>
        </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    //display:'flex',// flex | none
    //flexDirection:'column',// row（css 默认） | row-reverse | column(rn 默认) | column-reverse;
    //justifyContent:'space-around',//flex-start(默认) | flex-end | center | space-between | space-around;
    //flexWrap: 'nowrap',//nowrap (默认)| wrap | wrap-reverse; 
    //alignItems: 'flex-start',//flex-start | flex-end | center | baseline | stretch (默认);
    backgroundColor:'#567',  
    height:150
  },
  subBox:{
    backgroundColor:'red',
    
  },

  s1:{
    backgroundColor:'#00f',
  },
  s2:{
    backgroundColor:'#0f0',
  },
  s3:{
    backgroundColor:'#ff0',
  },
  text:{
   
  }
})


