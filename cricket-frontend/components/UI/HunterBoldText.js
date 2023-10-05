import { Text } from 'react-native'
import React from 'react'

const HunterBoldText = ({ children, style }) => {
	return <Text style={[{ fontFamily: 'hunterBold' }, style]}>{children}</Text>
}

export default HunterBoldText
