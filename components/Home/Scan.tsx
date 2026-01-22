import React, { Component } from 'react'
import { Pressable, Text, Touchable, TouchableOpacity, View } from 'react-native'

export default class Scan extends Component {
  render() {
    return (
      <View className='flex items-center py-12'>
        <Text className='font-bold text-3xl'>Ready to shop?</Text>
        <Text className='px-[15%] text-center text-gray-500 mt-4'>Point your camera at a barcode to add it to your cart instantly.</Text>
        <Pressable>
            <Text>Scan</Text>
        </Pressable>
      </View>
    )
  }
}
