import { Text } from 'react-native'
import React from 'react'

const HunterSemiBoldText = ({ children, style }) => {
	return (
		<Text style={[{ fontFamily: 'hunterSemiBold' }, style]}>{children}</Text>
	)
}

export default HunterSemiBoldText
