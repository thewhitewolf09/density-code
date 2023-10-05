import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { bgplayers } from '../../../assets/assets'
import { Image, View } from 'react-native'

const GradientImage = () => {
	return (
		<View
			style={{
				position: 'absolute',
				bottom: 0,
				width: '100%',
				height: '50%',
			}}
		>
			<Image
				source={bgplayers}
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					bottom: 0,
				}}
			/>
			<LinearGradient
				// Background Linear Gradient
				colors={['transparent', 'rgba(95,64,221,0.8)']}
				style={{
					zIndex: 1,
					width: '100%',
					height: '30%',
					position: 'absolute',
					bottom: 0,
				}}
			/>
		</View>
	)
}

export default GradientImage
