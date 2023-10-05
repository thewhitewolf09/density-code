import { View } from 'react-native'
import React from 'react'
// % completed and width will be the props
import { LinearGradient } from 'expo-linear-gradient'
export default function ProgressBar({ width, percentstyle }) {
	return (
		<View
			style={{
				width: '100%',
				height: 8,
				borderRadius: 4,
				backgroundColor: 'white',
			}}
		>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				locations={[0, 0.33, 0.8]}
				colors={[
					'rgba(207, 122, 106, 1)',
					'rgba(239, 82, 141, 1)',
					'rgba(95, 64, 221, 1)',
				]}
				style={percentstyle}
			>
				<View style={percentstyle}></View>
			</LinearGradient>
		</View>
	)
}
