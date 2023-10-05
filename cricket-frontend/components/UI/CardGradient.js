import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const CardGradient = ({ children, style }) => {
	return (
		<LinearGradient
			style={style}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			locations={[0, 0.6]}
			colors={['#5F40DD08', '#E6E0FD']}
		>
			{children}
		</LinearGradient>
	)
}

export default CardGradient
