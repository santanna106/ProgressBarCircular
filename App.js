import React from 'react'
import { View,Text } from 'react-native'
import AnimatedSpring from './src/components/AnimatedSpring'

export default function App() {
 return (
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <AnimatedSpring value={0.3} />
   </View>
  );
}