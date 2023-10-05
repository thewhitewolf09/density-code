import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const HunterGradient = ({ children, style }) => {
	return (
		<LinearGradient
			style={style}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			locations={[0, 0.2, 0.5, 0.6]}
			colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
		>
			{children}
		</LinearGradient>
	)
}

export default HunterGradient
