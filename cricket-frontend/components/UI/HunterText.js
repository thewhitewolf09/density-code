import { Text } from 'react-native'
import React from 'react'

const HunterText = ({ children, style }) => {
	return <Text style={[{ fontFamily: 'hunter' }, style]}>{children}</Text>
}

export default HunterText
