import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Card extends Component {
    render() {
      return (
        <View style={style.card}>
            <Text>Card</Text>
        </View>
      );
    }
  }


  const style = StyleSheet.create({
    card: {
      
      height:90,
      backgroundColor:"#fff",
      
     
    }
  })