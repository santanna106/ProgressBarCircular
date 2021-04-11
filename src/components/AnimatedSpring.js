import React from 'react'
import { Text } from 'react-native'
import ProgressCircle from './ProgressCircle'

const percent = 0.3;

const AnimatedSpring = ({ value }) => (
  <ProgressCircle
    value={value}
    size={200}
    thickness={4}
    color="#2b80ff"
    unfilledColor="#f2f2f2"
    animationMethod="spring"
    animationConfig={{ speed: 4 }}

  >
    <Text style={{ color: '#2b80ff', fontSize: 18, fontWeight: 'bold' }}>
      {`${Math.floor(value * 100)}%`}
    </Text>
  </ProgressCircle>
)

export default AnimatedSpring