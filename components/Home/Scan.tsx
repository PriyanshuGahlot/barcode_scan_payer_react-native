import React, { Component } from 'react';
import { Pressable, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from './Home';

type Props = {
  navigation: any;
};

export default class Scan extends Component<Props> {
  render() {

    const { navigation } = this.props;
    return (
      <View className='flex items-center pt-12 pb-16'>
        <Text className='font-bold text-3xl'>Ready to shop?</Text>
        <Text className='px-[15%] text-center text-gray-500 mt-4'>Point your camera at a barcode to add it to your cart instantly.</Text>
        <MaterialCommunityIcons name="barcode-scan" size={124} color="#007AFF" className='mt-10'/>
        <Pressable onPress={() => navigation.navigate('ScanningScreen')}
        className='flex flex-row bg-[#007AFF] py-4 px-12 rounded-full items-center justify-center gap-2 mt-6'>
          <Entypo name="camera" size={22} color="white" />
          <Text className='text-white font-bold'>SCAN PRODUCT</Text>
        </Pressable>
      </View>
    )
  }
}
