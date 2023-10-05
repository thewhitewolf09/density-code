import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const MatchCardGradient = ({ children, style }) => {
	return (
		<LinearGradient
			style={style}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			locations={[0, 1]}
			colors={['#FFFFFF80', 'rgba(255, 255, 255, 0.24)']}
		>
			{children}
		</LinearGradient>
	)
}

export default MatchCardGradient
