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
        <View style={style.avatarWrap}>
          <Image
            source={avatar}
            style={style.avatar}
          />
        </View>

        <View style={style.content}>
          <Text
            style={style.summary}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            想从 WEB 端开发跨越至 APP 开发？React-Native 绝对是必须掌握的一件利器！想从 WEB 端开发跨越至 APP 开发？React-Native 绝对是必须掌握的一件利器！想从 WEB 端开发跨越至 APP 开发？React-Native 绝对是必须掌握的一件利器！
          </Text>
          <Text style={style.time}>11:16</Text>
        </View>

      </View>
    );
  }
}


const style = StyleSheet.create({
  box: {
    flexDirection: 'row', 
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
    shadowColor: '#4F5EA3',
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 3,//react-native-shadow
  },
  avatarWrap: {
    marginRight: 18,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2
  },

  content: {
    flex: 1,
  },
  summary: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#384337'
  },
  time: {
    marginTop: 10,
    color: '#A3ADB4'
  }
})