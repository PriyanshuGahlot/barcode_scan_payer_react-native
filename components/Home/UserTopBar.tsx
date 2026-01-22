import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

let userName = "Sydney Sweeney";

export default class UserTopBar extends Component {
  render() {
    return (
      <View className='w-full px-8 py-4 flex flex-row justify-between items-center'>
        <View>
            <Text className='text-gray-500'>Welcome back,</Text>
            <Text className='font-bold text-xl'>{userName}</Text>
        </View>
        <Image className='w-14 h-14 rounded-full'
          source={require('../../assets/userImage.png')}/>
      </View>
    )
  }
}
