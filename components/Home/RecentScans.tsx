import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class RecentScans extends Component {
  render() {
    return (
      <View className='px-8'>
        <View className='flex-row justify-between'>
            <Text className='font-bold'>Recent Scans</Text>
            <Text className='text-[#007AFF]'>View all</Text>
        </View>
      </View>
    )
  }
}
