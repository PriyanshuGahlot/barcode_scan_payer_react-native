import React, { Component } from 'react'
import { Text, View } from 'react-native'
import UserTopBar from './UserTopBar'
import Scan from './Scan'

export default class Home extends Component {
  render() {
    return (
      <View>
        <UserTopBar/>
        <Scan/>
      </View>
    )
  }
}
