import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// import avatar from './img/avatar.png';
let avatar = require('./img/avatar.png');
//avatar = { uri: 'http://img.zcool.cn/community/010f87596f13e6a8012193a363df45.jpg@1280w_1l_2o_100sh.jpg' }

export default class Card extends Component {
  render() {
    return (
      <View style={style.box}>
        <Image
          source={avatar}
          style={style.avatar}
        />
      </View>
    );
  }
}


const style = StyleSheet.create({
  box: {

    height: 90,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    shadowColor: '#4F5EA3',
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 3,//react-native-shadow
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2
  },
})