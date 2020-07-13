import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'

import Routes from './routes'

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#473F97" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default src
